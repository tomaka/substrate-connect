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
import { Link, makeStyles, Typography } from '@material-ui/core';
import { substrateGray } from './theme';
import { fade } from '@material-ui/core/styles/colorManipulator';
const useStyles = makeStyles(theme => ({
    sidebar: {
        width: '345px',
        maxWidth: '345px',
        paddingLeft: theme.spacing(10),
        '& .fixed': {
            position: 'fixed',
        },
        [theme.breakpoints.down('sm')]: {
            '& .fixed': {
                width: '100%',
                maxWidth: 'none',
                left: 0,
                top: theme.spacing(0.5),
                padding: theme.spacing(),
                paddingLeft: theme.spacing(5),
                backgroundColor: fade(theme.palette.background.default, 0.95),
                borderBottom: `1px solid ${substrateGray[200]}`
            },
        },
    },
    link: {
        display: 'block',
        marginBottom: theme.spacing(0.5),
        color: substrateGray[600],
        '&:hover': {
            color: substrateGray[900],
            textDecoration: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'inline-block',
            marginRight: theme.spacing(3),
            marginBottom: theme.spacing(),
            color: substrateGray[900],
        },
        '& *': {
            color: 'inherit',
        },
    },
}));
export const Sidebar = ({ children }) => {
    const classes = useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.sidebar },
            React.createElement("div", { className: 'fixed' }, children))));
};
export const SidebarLink = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const classes = useStyles();
    return (React.createElement(Link, Object.assign({ className: classes.link }, props),
        React.createElement(Typography, { component: 'span', variant: 'subtitle2' }, children)));
};
//# sourceMappingURL=Sidebar.js.map