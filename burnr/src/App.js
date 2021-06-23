var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Pages
import { makeStyles } from '@material-ui/core/styles';
import { ApiContext, AccountContext } from './utils/contexts';
import { useApiCreate, useLocalStorage } from './hooks';
import { createLocalStorageAccount } from './utils/utils';
import Home from './Home';
import { NavFooter, ThemeToggleProvider, Head, ErrorBoundary, BurnrBG, BurnrDivider } from './components';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
    },
    main: {
        width: '100%',
        maxWidth: `${theme.spacing(3) + 650}px`,
        padding: theme.spacing(2),
        flex: 1,
    }
}));
const App = ({ className = '' }) => {
    var _a;
    const api = useApiCreate();
    const classes = useStyles();
    const [endpoint, setEndpoint] = useLocalStorage('endpoint');
    if (!endpoint)
        setEndpoint('Polkadot-WsProvider');
    const [localStorageAccount, setLocalStorageAccount] = useLocalStorage((_a = endpoint.split('-')[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    const [account, setCurrentAccount] = useState({});
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const callSetters = () => __awaiter(void 0, void 0, void 0, function* () {
            if (yield api.isReady) {
                if (!localStorageAccount) {
                    const userTmp = createLocalStorageAccount();
                    setLocalStorageAccount(JSON.stringify(userTmp));
                    setCurrentAccount(userTmp);
                }
                else {
                    setCurrentAccount(JSON.parse(localStorageAccount));
                }
                setLoader(false);
            }
        });
        api && callSetters();
    }, [localStorageAccount, setLocalStorageAccount, api]);
    return (React.createElement(BrowserRouter, null,
        React.createElement("div", { className: `${classes.root} ${className}` },
            React.createElement(ThemeToggleProvider, null,
                React.createElement(AccountContext.Provider, { value: { account, setCurrentAccount } },
                    React.createElement(ErrorBoundary, null,
                        React.createElement("main", { className: classes.main },
                            React.createElement(ApiContext.Provider, { value: api },
                                React.createElement(Head, null),
                                React.createElement(BurnrDivider, null),
                                React.createElement(Home, { account: account, loader: loader }),
                                React.createElement(BurnrBG, null))),
                        React.createElement(NavFooter, null)))))));
};
export default App;
//# sourceMappingURL=App.js.map