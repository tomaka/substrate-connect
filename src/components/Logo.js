import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { substrateGreen } from './theme';
const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(7),
        fontWeight: 600,
        lineHeight: 1,
        '& .green': {
            color: substrateGreen[300],
        },
        '& .lighter': {
            fontWeight: 400,
        }
    },
}));
const Logo = () => {
    const classes = useStyles();
    return (React.createElement(Typography, { variant: 'h3', className: classes.root },
        "substrate",
        React.createElement("span", { className: 'green' }, "_"),
        React.createElement("br", null),
        React.createElement("span", { className: 'lighter' }, "connect")));
};
export default Logo;
//# sourceMappingURL=Logo.js.map