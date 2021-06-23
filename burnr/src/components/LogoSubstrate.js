/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import LogoLight from 'url:../../public/assets/images/logo_substrate.svg';
import LogoDark from 'url:../../public/assets/images/logo_substrate_onDark.svg';
const useStyles = makeStyles({
    root: {
        display: 'block',
        width: '120px',
        '& img': {
            maxWidth: '100%',
        },
    },
});
const LogoSubstrate = ({ theme }) => {
    const classes = useStyles();
    return (React.createElement(Link, { href: 'http://substrate.io/', target: '_blank', className: classes.root },
        React.createElement("img", { src: theme ? LogoLight : LogoDark })));
};
export default LogoSubstrate;
//# sourceMappingURL=LogoSubstrate.js.map