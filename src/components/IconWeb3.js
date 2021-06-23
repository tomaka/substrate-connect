import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    iconRoot: {
        display: 'inline-block',
        fontFamily: 'Web3-Regular !important',
        letterSpacing: '0 !important',
        textAlign: 'center',
        color: ({ color }) => color || 'inherit',
        fontSize: ({ size }) => size || 'inherit',
        fontWeight: 400,
    },
});
const hasGlyph = (string) => ['kusama', 'polkadot', 'westend', 'kulupu', 'rococo'].indexOf(string) > -1;
const IconWeb3 = ({ size, color, children }) => {
    const classes = useStyles({ size, color });
    return React.createElement("span", { className: classes.iconRoot }, children && hasGlyph(children) ? children : '?');
};
export default IconWeb3;
//# sourceMappingURL=IconWeb3.js.map