import React, { useState } from 'react';
import Identicon from '@polkadot/react-identicon';
import { Typography, Snackbar, Box } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { copyToClipboard } from '../utils/utils';
const Alert = (props) => {
    return React.createElement(MuiAlert, Object.assign({ elevation: 6, variant: "filled" }, props));
};
const AccountCard = ({ account, addressFormat }) => {
    const [showCopied, setShowCopied] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Snackbar, { anchorOrigin: { vertical: 'top', horizontal: 'center' }, open: showCopied, autoHideDuration: 2000, onClose: () => setShowCopied(false) },
            React.createElement(Alert, { severity: "success" }, "Copied!")),
        React.createElement(Box, { display: 'flex', alignItems: 'center' },
            React.createElement(Identicon, { size: 32, theme: 'polkadot', value: account.address, onCopy: () => {
                    setShowCopied(true);
                    copyToClipboard(account.address);
                } }),
            React.createElement(Box, { height: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: 1 },
                account.name !== '' && React.createElement(Typography, { variant: 'h4' }, account.name),
                React.createElement(Typography, { variant: 'subtitle2' }, addressFormat === 'Full'
                    ? account.address
                    : account.address.slice(0, 4) + '...' + account.address.slice(account.address.length - 4, account.address.length))))));
};
export default AccountCard;
//# sourceMappingURL=AccountCard.js.map