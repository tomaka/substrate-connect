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
import * as React from 'react';
import { Box, Link, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            marginBottom: theme.spacing(),
        },
    },
}));
const FooterLink = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const classes = useStyles();
    return (React.createElement(Box, { component: 'span', mr: 4, className: classes.root },
        React.createElement(Link, Object.assign({ color: 'textSecondary', variant: 'body2', target: '_blank', rel: 'noreferrer' }, props), children)));
};
export default FooterLink;
//# sourceMappingURL=FooterLink.js.map