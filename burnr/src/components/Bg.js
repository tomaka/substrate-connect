import React from 'react';
import { makeStyles, createStyles, Divider } from '@material-ui/core';
const useStyles = makeStyles((theme) => createStyles({
    root: {
        position: 'fixed',
        width: 600,
        height: 600,
        top: 45,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        background: theme.palette.secondary.dark,
        borderRadius: '50%',
        zIndex: -1,
        filter: 'blur(80px)',
    },
}));
export const BurnrBG = () => {
    const classes = useStyles();
    return React.createElement("div", { className: classes.root });
};
export const BurnrDivider = () => (React.createElement(Divider, { style: { backgroundColor: 'transparent', height: .5 } }));
//# sourceMappingURL=Bg.js.map