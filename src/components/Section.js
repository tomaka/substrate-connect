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
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { substrateGreen } from './theme';
const useStyles = makeStyles(theme => ({
    section: {
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        paddingBottom: theme.spacing(5),
        '&:after': {
            content: "' '",
            position: 'absolute',
            top: 0,
            left: `calc(${theme.breakpoints.values.lg / 2}px - 50vw - ${theme.spacing(5)}px)`,
            height: '100%',
            width: '100vw',
            zIndex: '-1',
            background: theme.palette.background.default,
            [theme.breakpoints.down('md')]: {
                left: theme.spacing(-5),
            },
        },
        '& h1, & h2, & h3, & h4, & h5, & p': {
            maxWidth: '624px'
        },
    },
    heading: {
        marginBottom: theme.spacing(1),
        '& sup': {
            marginRight: theme.spacing(1.2),
        },
    },
    hero: {
        fontSize: '80px',
        marginTop: '0.2em',
        marginBottom: '0.2em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '10vw',
        },
    },
    ref: {
        display: 'block',
        width: 'fit-content',
        marginLeft: '-0.5em',
        textDecoration: 'none',
        '&:first-of-type': {
            marginTop: theme.spacing(),
        },
        '& button': {
            textAlign: 'left',
            color: substrateGreen[600],
        },
    }
}));
export const Section = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const classes = useStyles();
    return React.createElement(Box, Object.assign({ className: classes.section }, props), children);
};
export const SectionHeading = ({ children, prefix, id }) => {
    const classes = useStyles();
    return (React.createElement(Typography, { id: id, variant: 'h2', className: classes.heading },
        prefix &&
            React.createElement(Typography, { variant: 'h4', component: 'sup' }, prefix),
        children));
};
export const SectionText = ({ children }) => (React.createElement(Typography, { variant: 'body1' }, children));
export const SectionHeroText = ({ children }) => {
    const classes = useStyles();
    return (React.createElement(Typography, { component: 'div', color: 'primary', variant: 'h1', className: classes.hero }, children));
};
export const SectionRef = (_a) => {
    var { children, href, startIcon = React.createElement(ArrowForwardIcon, null) } = _a, props = __rest(_a, ["children", "href", "startIcon"]);
    const classes = useStyles();
    return (React.createElement("a", { target: '_blank', rel: 'noreferrer', href: href, className: classes.ref },
        React.createElement(Button, Object.assign({ color: 'secondary', startIcon: startIcon }, props), children)));
};
//# sourceMappingURL=Section.js.map