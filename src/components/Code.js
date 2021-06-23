import * as React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.paper,
        borderRadius: theme.spacing(0.5),
    },
    heading: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`
    },
}));
export const Code = ({ children, heading }) => {
    const classes = useStyles();
    return (React.createElement(Box, { p: 2, mb: 2, mt: 2, className: classes.root },
        heading &&
            React.createElement(Typography, { component: 'div', variant: 'h4', className: classes.heading }, heading),
        React.createElement(Typography, { variant: 'subtitle2' }, children)));
};
//# sourceMappingURL=Code.js.map