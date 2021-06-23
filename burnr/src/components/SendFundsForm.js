var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useContext, useState, useEffect } from 'react';
import BN from 'bn.js';
import { makeStyles, Button, Typography, LinearProgress, Table, Box } from '@material-ui/core';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';
import { Keyring } from '@polkadot/api';
import { AccountContext } from '../utils/contexts';
import { InputAddress, InputFunds } from '../components';
import { useBalance, useApi, useLocalStorage } from '../hooks';
import { HistoryTableRow } from '.';
const useStyles = makeStyles((theme) => ({
    errorMessage: {
        marginBottom: theme.spacing(),
        textAlign: 'center'
    },
    button: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        '&:hover': {
            color: theme.palette.getContrastText(theme.palette.secondary.dark),
        },
    },
    transferInfoMessage: {
        overflowWrap: 'break-word',
        padding: '30px'
    }
}));
const columns = [
    { id: 'withWhom', label: '', width: 160 },
    { id: 'extrinsic', label: 'Extrinsic' },
    { id: 'value', label: 'Value', minWidth: 170, align: 'right' },
    { id: 'status', label: 'Status', width: 40, align: 'right' }
];
const SendFundsForm = () => {
    var _a;
    const classes = useStyles();
    const { account, setCurrentAccount } = useContext(AccountContext);
    const balanceArr = useBalance(account.userAddress);
    const api = useApi();
    const maxAmountFull = balanceArr[1];
    const unit = balanceArr[3];
    // TODO: This must be prettier and reusable (exists already on App)
    const [endpoint, setEndpoint] = useLocalStorage('endpoint');
    if (!endpoint)
        setEndpoint('Polkadot-WsProvider');
    const [, setLocalStorageAccount] = useLocalStorage((_a = endpoint.split('-')[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    // TODO END: This must be prettier and reusable (exists already on App)
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('0');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [countdownNo, setCountdownNo] = useState(0);
    const [rowStatus, setRowStatus] = useState(0);
    useEffect(() => {
        let countdown;
        if (!loading) {
            if (message != '') {
                countdown = setInterval(() => {
                    setCountdownNo((oldCountdownNo) => {
                        if (oldCountdownNo === 0) {
                            setMessage('');
                            return 0;
                        }
                        else {
                            return oldCountdownNo - 1;
                        }
                    });
                }, 100);
            }
        }
        return () => {
            clearInterval(countdown);
        };
    }, [loading, message, setMessage]);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            e.preventDefault();
            setLoading(true);
            setCountdownNo(100);
            setRowStatus(3);
            const keyring = new Keyring({ type: 'sr25519' });
            const sender = keyring.addFromUri(account.userSeed);
            yield api.tx.balances.transfer(address, new BN(amount)).signAndSend(sender, (result) => {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                setMessage(`Current transaction status ${result.status}`);
                if (result.status.isInBlock) {
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    setMessage(`Transaction Block hash: ${result.status.asInBlock}`);
                }
                else if (result.status.isFinalized) {
                    setLoading(false);
                    setRowStatus(1);
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    setMessage(`Block hash:: ${result.status.asFinalized}.`);
                    account.userHistory.unshift({
                        withWhom: address,
                        extrinsic: 'Transfer',
                        value: amount,
                        status: 1
                    });
                    setCurrentAccount(account);
                    setLocalStorageAccount(JSON.stringify(account));
                }
            });
        }
        catch (err) {
            setLoading(false);
            setRowStatus(2);
            setMessage(`😞 Error: ${err}`);
            account.userHistory.unshift({
                withWhom: address,
                extrinsic: 'Transfer',
                value: amount,
                status: 2
            });
            setCurrentAccount(account);
            setLocalStorageAccount(JSON.stringify(account));
        }
    });
    const isValidAddressPolkadotAddress = (add = '') => {
        try {
            encodeAddress(isHex(add)
                ? hexToU8a(add.toString())
                : decodeAddress(add));
            return true;
        }
        catch (error) {
            return false;
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(InputAddress, { setAddress: setAddress }),
        React.createElement(InputFunds, { hidePercentages: true, total: maxAmountFull, currency: unit, setAmount: setAmount }),
        React.createElement(Button, { type: 'submit', variant: 'contained', size: 'large', color: 'secondary', disabled: loading || !parseInt(amount) || !isValidAddressPolkadotAddress(address) || account.userAddress === address, onClick: handleSubmit, className: classes.button }, "Send"),
        !isValidAddressPolkadotAddress(address) &&
            React.createElement(Typography, { variant: 'body2', color: 'error', className: classes.errorMessage }, "You need to add a valid address."),
        !parseInt(amount) &&
            React.createElement(Typography, { variant: 'body2', color: 'error', className: classes.errorMessage }, "You should add some amount."),
        React.createElement(Box, { mt: 3 },
            countdownNo !== 0 &&
                React.createElement(Table, { size: "small" },
                    React.createElement(HistoryTableRow, { row: {
                            withWhom: address,
                            extrinsic: 'Transfer',
                            value: amount,
                            status: rowStatus
                        }, unit: unit, columns: columns })),
            React.createElement(Typography, { variant: 'subtitle2', className: classes.transferInfoMessage }, message),
            !loading && countdownNo !== 0 &&
                React.createElement(LinearProgress, { variant: "determinate", value: countdownNo }))));
};
export default SendFundsForm;
//# sourceMappingURL=SendFundsForm.js.map