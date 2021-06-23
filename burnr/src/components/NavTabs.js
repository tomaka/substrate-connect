var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext } from 'react';
import { Tabs, Tab, Typography, Box, Paper, makeStyles } from '@material-ui/core';
import SwapHorizSharpIcon from '@material-ui/icons/SwapHorizSharp';
import CallMadeSharpIcon from '@material-ui/icons/CallMadeSharp';
import CallReceivedSharpIcon from '@material-ui/icons/CallReceivedSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import { SendFundsForm, ReceiveFundsForm, BurnrDivider, HistoryTable } from '../components';
import { useApi, useBalance, useLocalStorage } from '../hooks';
import { AccountContext } from '../utils/contexts';
import { createLocalStorageAccount } from '../utils/utils';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 265px)',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        [theme.breakpoints.down('sm')]: {
            minHeight: 'calc(100vh - 320px)',
        },
    },
    rootHeading: {
        marginBottom: theme.spacing(3),
    },
    tabBurn: {
        '& svg, & .MuiTab-wrapper': {
            color: theme.palette.error.main
        }
    },
    rootTabs: {
        '& .MuiTab-root': Object.assign(Object.assign({ minHeight: theme.spacing(8), padding: 0 }, theme.typography.overline), { lineHeight: 1 })
    }
}));
const TabPanel = (_a) => {
    var { children, value, index } = _a, props = __rest(_a, ["children", "value", "index"]);
    return (React.createElement("div", Object.assign({ hidden: value !== index, id: `tabpanel-${index}` }, props), value === index && (React.createElement(Box, { p: 2 }, children))));
};
const NavTabs = () => {
    var _a;
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const api = useApi();
    const [endpoint] = useLocalStorage('endpoint');
    const minEndpoint = (_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.split('-')[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const { account, setCurrentAccount } = useContext(AccountContext);
    const balance = useBalance(account.userAddress);
    const handleChange = (event, newValue) => {
        if (newValue === 0) {
            if (!balance[2] && !window.confirm(`Burn keys from account with ${balance[0].toString()} ${api.registry.chainTokens.toString()}?`)) {
                return;
            }
            localStorage.removeItem(minEndpoint);
            const userTmp = createLocalStorageAccount();
            setCurrentAccount(userTmp);
            return;
        }
        setValue(newValue);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Paper, { square: true },
            React.createElement(Tabs, { value: value, onChange: handleChange, variant: 'fullWidth', className: classes.rootTabs },
                React.createElement(Tab, { label: "Burn Account", icon: React.createElement(WhatshotSharpIcon, { fontSize: 'small' }), className: classes.tabBurn }),
                React.createElement(Tab, { label: "Receipts", icon: React.createElement(SwapHorizSharpIcon, { fontSize: 'small' }) }),
                React.createElement(Tab, { label: "Send", icon: React.createElement(CallMadeSharpIcon, { fontSize: 'small' }) }),
                React.createElement(Tab, { label: "Receive", icon: React.createElement(CallReceivedSharpIcon, { fontSize: 'small' }) }))),
        React.createElement(BurnrDivider, null),
        React.createElement(Paper, { className: classes.root },
            React.createElement(TabPanel, { value: value, index: 1 },
                React.createElement(Typography, { variant: 'h2', className: classes.rootHeading }, "Transaction History"),
                React.createElement(HistoryTable, null)),
            React.createElement(TabPanel, { value: value, index: 2 },
                React.createElement(Typography, { variant: 'h2', className: classes.rootHeading }, "Send Funds"),
                React.createElement(SendFundsForm, null)),
            React.createElement(TabPanel, { value: value, index: 3 },
                React.createElement(Typography, { variant: 'h2', className: classes.rootHeading }, "Receive Funds"),
                React.createElement(ReceiveFundsForm, null)))));
};
export default NavTabs;
//# sourceMappingURL=NavTabs.js.map