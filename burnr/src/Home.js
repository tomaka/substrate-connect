import React, { useState, useEffect } from 'react';
import { Paper, IconButton, Box, makeStyles, CircularProgress } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { NavTabs, AccountCard, BalanceValue, BurnrDivider, AccountMenu } from './components';
import { BalanceVisibleContext } from './utils/contexts';
import { useBalance, useLocalStorage } from './hooks';
const useStyles = makeStyles(theme => ({
    paperAccount: {
        borderTopLeftRadius: theme.spacing(0.5),
    },
    loadingPaper: {
        height: 'calc(100vh - 150px)',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));
const Home = ({ account, loader }) => {
    const [localBalance, setLocalBalance] = useLocalStorage('balanceVisibility');
    const [balanceVisibility, setBalanceVisibility] = useState(localBalance !== 'false');
    const classes = useStyles();
    const balanceArr = useBalance((account === null || account === void 0 ? void 0 : account.userAddress) || '');
    const balance = balanceArr[1];
    const unit = balanceArr[3];
    useEffect(() => {
        setLocalBalance(balanceVisibility ? 'true' : 'false');
    }, [balanceVisibility, setLocalBalance]);
    return loader ? (React.createElement(Paper, { className: classes.loadingPaper },
        React.createElement(CircularProgress, null))) : (React.createElement(BalanceVisibleContext.Provider, { value: { balanceVisibility, setBalanceVisibility } },
        React.createElement(Paper, { square: true, className: classes.paperAccount },
            React.createElement(Box, { paddingY: 1, paddingX: 2, display: 'flex', alignItems: 'center' },
                React.createElement(Box, { width: '50%', display: 'flex' }, (account === null || account === void 0 ? void 0 : account.userAddress) &&
                    React.createElement(React.Fragment, null,
                        React.createElement(AccountCard, { account: {
                                address: account === null || account === void 0 ? void 0 : account.userAddress,
                                name: account === null || account === void 0 ? void 0 : account.userName
                            } }),
                        React.createElement(AccountMenu, null))),
                React.createElement(Box, { width: "50%", display: 'flex', alignItems: 'center' },
                    React.createElement(BalanceValue, { isVisible: balanceVisibility, unit: unit, value: balance, size: 'large', style: { width: '100%', justifyContent: 'flex-end' } }),
                    React.createElement(IconButton, { style: { borderRadius: 4 }, onClick: () => setBalanceVisibility(!balanceVisibility) }, balanceVisibility ? React.createElement(VisibilityIcon, null) : React.createElement(VisibilityOffIcon, null))))),
        React.createElement(BurnrDivider, null),
        React.createElement(NavTabs, null)));
};
export default Home;
//# sourceMappingURL=Home.js.map