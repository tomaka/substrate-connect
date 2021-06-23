import React, { useContext } from 'react';
import BN from 'bn.js';
import { BalanceVisibleContext } from '../utils/contexts';
import { TableRow, TableCell } from '@material-ui/core';
import { AccountCard, BalanceValue, PopoverExtrinsic } from '.';
const HistoryTableRow = ({ columns, row, unit = 'Unit', showStatus = true }) => {
    const { balanceVisibility } = useContext(BalanceVisibleContext);
    return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    React.createElement(TableRow, { hover: true, key: `transaction` }, columns.map((column) => {
        const value = row[column.id];
        return (React.createElement(TableCell, { key: `transaction-${column.id}`, align: column.align },
            column.id === 'withWhom' &&
                React.createElement(AccountCard, { account: { address: value.toString(), name: '' } }),
            column.id === 'extrinsic' && value,
            column.id === 'value' // This may look overwhelming but is just for "dump" data until page is fixed
                && (typeof value === 'number' || typeof value === 'string')
                && React.createElement(BalanceValue, { isVisible: balanceVisibility, value: new BN(value), unit: unit }),
            showStatus && column.id === 'status' && React.createElement(PopoverExtrinsic, { status: row.status })));
    })));
};
export default HistoryTableRow;
//# sourceMappingURL=HistoryTableRow.js.map