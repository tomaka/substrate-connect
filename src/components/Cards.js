import * as React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { IconWeb3 } from '.';
import { substrateGray, substrateGreen } from './theme';
const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        width: `calc(50% - ${theme.spacing(2)}px)`,
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(),
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            width: `calc(100% - ${theme.spacing(2)}px)`,
        },
        '&.network': {
            textAlign: 'left',
            width: `calc(25% - ${theme.spacing(2)}px)`,
            justifyContent: 'start',
            [theme.breakpoints.down('sm')]: {
                width: `calc(50% - ${theme.spacing(2)}px)`,
            },
        },
        '& .subtitle': {
            paddingBottom: theme.spacing(),
            borderBottom: `1px solid ${theme.palette.divider}`,
            '&.placeholder': {
                opacity: 0,
            }
        },
        '& img': {
            width: '100%',
            height: '204px',
            objectFit: 'cover',
            backgroundColor: 'whitesmoke',
        },
        '& .content': {
            position: 'absolute',
            bottom: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
            width: `calc(100% - ${theme.spacing()}px)`,
        }
    },
    link: {
        position: 'absolute',
        width: 'calc(100% + 2px)',
        height: 'calc(100% + 2px)',
        top: -1,
        left: -1,
        padding: theme.spacing(),
        border: `1px solid transparent`,
        borderRadius: theme.spacing(),
        textAlign: 'right',
        color: theme.palette.primary.dark,
        '&:hover': {
            borderColor: theme.palette.primary.main,
        },
        '&:not(:hover) svg': {
            opacity: 0,
        }
    },
    status: {
        display: 'inline-flex',
        width: 'max-content',
        maxWidth: '100%',
        alignItems: 'center',
        marginBottom: theme.spacing(),
        paddingLeft: theme.spacing(0.8),
        paddingRight: theme.spacing(0.8),
        borderRadius: theme.spacing(0.5),
        fontSize: '0.8em',
        lineHeight: '250%',
        background: substrateGray[100],
        '& svg': {
            marginRight: theme.spacing(0.5),
            fontSize: '1em',
            color: substrateGray[400],
        },
        '&.supported svg': {
            color: substrateGreen[400],
        },
        '&.very svg': {
            color: '#EAC920',
        },
    },
}));
const CardLink = ({ href, children }) => {
    const classes = useStyles();
    return (React.createElement("a", { target: '_blank', rel: 'noreferrer', href: href, className: classes.link },
        React.createElement(CallMadeIcon, null),
        React.createElement(Typography, { variant: 'subtitle2' }, children)));
};
export const CardProject = ({ children, title, subtitle, linkProps, imageProps }) => {
    const classes = useStyles();
    return (React.createElement(Grid, { item: true, className: classes.card },
        linkProps && React.createElement(CardLink, Object.assign({}, linkProps)),
        React.createElement(Typography, { variant: 'h3' }, title),
        subtitle
            ? React.createElement(Typography, { className: 'subtitle', variant: 'body2' }, subtitle)
            : React.createElement(Typography, { className: 'subtitle placeholder', variant: 'body2' }, "no"),
        React.createElement("img", { src: (imageProps === null || imageProps === void 0 ? void 0 : imageProps.path) || '', alt: title, style: { objectPosition: imageProps === null || imageProps === void 0 ? void 0 : imageProps.position } }),
        React.createElement("div", { className: 'content' }, children)));
};
export const CardStatus = ({ status }) => {
    const classes = useStyles();
    return (React.createElement("span", { className: `${classes.status} ${status}` },
        React.createElement(FiberManualRecordIcon, null),
        React.createElement(Typography, { variant: 'subtitle2' }, status)));
};
export const CardNetwork = ({ children, title, statusProps, linkProps }) => {
    const classes = useStyles();
    return (React.createElement(Grid, { item: true, className: `${classes.card} network` },
        linkProps && React.createElement(CardLink, Object.assign({}, linkProps)),
        React.createElement(CardStatus, Object.assign({}, statusProps)),
        React.createElement(Box, { mb: true },
            React.createElement(Typography, { variant: 'h3' },
                React.createElement(Box, { component: 'span', mr: 0.75 },
                    React.createElement(IconWeb3, null, title.toLowerCase())),
                title)),
        children));
};
//# sourceMappingURL=Cards.js.map