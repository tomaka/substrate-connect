import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import QRCode from 'qrcode.react';
import { AccountContext } from '../utils/contexts';
const ReceiveFundsForm = () => {
    const { account } = useContext(AccountContext);
    return (React.createElement(Box, { display: 'flex', justifyContent: 'center' },
        React.createElement(QRCode, { value: account.userAddress, size: 400, includeMargin: true })));
};
export default ReceiveFundsForm;
//# sourceMappingURL=ReceiveFundsForm.js.map