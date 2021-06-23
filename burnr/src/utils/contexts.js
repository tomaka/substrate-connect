// SPDX-License-Identifier: Apache-2
import React from 'react';
const BalanceVisibleContext = React.createContext({
    balanceVisibility: true,
    setBalanceVisibility: () => console.log()
});
const AccountContext = React.createContext({
    account: {},
    setCurrentAccount: () => console.log()
});
const AdminContext = React.createContext({});
const ApiContext = React.createContext({});
const EvtMgrContext = React.createContext([]);
const EvtTxContext = React.createContext([]);
export { AccountContext, AdminContext, ApiContext, BalanceVisibleContext, EvtMgrContext, EvtTxContext };
//# sourceMappingURL=contexts.js.map