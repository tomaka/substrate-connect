import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline, makeStyles } from '@material-ui/core';
import { SubstrateLight, SubstrateDark } from './../themes';
import { useLocalStorage } from '../hooks';
import { LogoSubstrate, ThemeButton } from '../components';
const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        maxWidth: '1330px',
        padding: theme.spacing(2),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(1),
        },
    },
}));
// @TODO rewrite in a React way?
const ThemeToggleProvider = ({ children }) => {
    const classes = useStyles();
    const [localTheme, setLocalTheme] = useLocalStorage('theme');
    const [theme, setTheme] = useState(localTheme === 'false' ? false : true);
    const appliedTheme = createMuiTheme(theme ? SubstrateLight : SubstrateDark);
    const selectTheme = (selected) => {
        setLocalTheme(selected.toString());
        setTheme(selected);
    };
    return (React.createElement(ThemeProvider, { theme: appliedTheme },
        React.createElement(CssBaseline, null),
        React.createElement("div", { className: classes.root },
            React.createElement(LogoSubstrate, { theme: theme }),
            React.createElement(ThemeButton, { theme: theme, onClick: () => selectTheme(!theme) })),
        children));
};
export default ThemeToggleProvider;
//# sourceMappingURL=ThemeToggleProvider.js.map