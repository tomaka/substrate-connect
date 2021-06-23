import React from 'react';
import { Typography, Box, Link, Grid } from '@material-ui/core';
const AppFooter = () => (React.createElement(Box, { paddingBottom: 2 },
    React.createElement(Typography, { variant: 'body2', component: 'div' },
        React.createElement(Grid, { container: true, spacing: 1 },
            React.createElement(Grid, { item: true },
                React.createElement(Link, { href: '#', color: 'textPrimary' },
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " Parity Technologies")),
            React.createElement(Grid, { item: true },
                React.createElement(Link, { href: '#', color: 'textPrimary' }, "Terms & conditions")),
            React.createElement(Grid, { item: true },
                React.createElement(Link, { href: '#', color: 'textPrimary' }, "Privacy policy")),
            React.createElement(Grid, { item: true },
                React.createElement(Link, { href: '#', color: 'textPrimary' }, "Report an issue"))))));
export default AppFooter;
//# sourceMappingURL=NavFooter.js.map