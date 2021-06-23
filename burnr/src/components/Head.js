import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { NodeSelector } from '../components';
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(7),
        },
    },
}));
const Head = () => {
    const classes = useStyles();
    return (React.createElement(Grid, { container: true, alignItems: 'center', className: classes.root },
        React.createElement(Grid, { item: true, xs: 6 },
            React.createElement(Box, { paddingX: 2 },
                React.createElement(Typography, { variant: 'h1' }, "Burnr"))),
        React.createElement(Grid, { item: true, xs: 6 },
            React.createElement(NodeSelector, null))));
};
export default Head;
//# sourceMappingURL=Head.js.map