import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { transformCurrency } from '../utils/utils';
import { formatBalance } from '@polkadot/util';
import useApi from '../hooks/api/useApi';
// @TODO get token codes from api
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: theme.spacing(0.5),
        backgroundColor: (props) => props.colored
            ? theme.palette.primary.light
            : '',
        color: (props) => props.colored
            ? theme.palette.getContrastText(theme.palette.primary.light)
            : theme.palette.text.primary,
    },
    blur: {
        filter: (props) => props.visible
            ? 'unset'
            : 'blur(5px)'
    }
}));
const BalanceValue = ({ value, isVisible, unit = '', size, style }) => {
    const api = useApi();
    const fBalance = formatBalance(value, { withSi: false });
    const fUnit = transformCurrency(formatBalance.calcSi(value.toString(), api.registry.chainDecimals[0]).value, unit);
    const isColored = parseInt(fBalance) >= 0;
    const classes = useStyles({ colored: isColored, visible: isVisible });
    const TypographyVariant = size === 'large' ? 'subtitle1' : 'subtitle2';
    return (React.createElement(Box, { component: 'span', className: classes.root, style: style },
        React.createElement(Typography, { variant: TypographyVariant, className: classes.blur }, `${fBalance} ${fUnit}`)));
};
export default React.memo(BalanceValue);
//# sourceMappingURL=BalanceValue.js.map