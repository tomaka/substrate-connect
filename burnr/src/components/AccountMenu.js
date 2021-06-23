import React, { useState, useContext } from 'react';
import { grey } from '@material-ui/core/colors';
import { Typography, makeStyles, createStyles, IconButton, ListItem, Menu, MenuItem } from '@material-ui/core';
import { BurnrDivider } from '../components';
import { AccountContext } from '../utils/contexts';
import { openInNewTab, downloadFile } from '../utils/utils';
import { POLKA_ACCOUNT_ENDPOINTS } from '../utils/constants';
import { useLocalStorage } from '../hooks';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => createStyles({
    menu: {
        '& .MuiListItem-dense:focus': {
            outline: 'transparent !important',
        },
        '& hr': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            backgroundColor: theme.palette.grey[200],
        }
    }
}));
const { polkastats, polkascan } = POLKA_ACCOUNT_ENDPOINTS;
const AccountMenu = () => {
    var _a;
    const classes = useStyles();
    const [endpoint] = useLocalStorage('endpoint');
    const minEndpoint = (_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.split('-')[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const [polkastatsUri] = useState(`https://${minEndpoint}.${polkastats}`);
    const [polkascanUri] = useState(`https://${polkascan}/${minEndpoint}`);
    const { account } = useContext(AccountContext);
    const { userAddress, userJson, userSeed } = account;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { onClick: handleClick },
            React.createElement(ExpandMoreIcon, { style: { color: grey[500] } })),
        React.createElement(Menu, { transformOrigin: { vertical: -40, horizontal: 'left' }, anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), className: classes.menu },
            React.createElement(ListItem, { dense: true, autoFocus: false, selected: false },
                React.createElement(Typography, { variant: 'overline' }, "Block explorers")),
            React.createElement(MenuItem, { onClick: () => openInNewTab(polkascanUri) }, "Polkascan"),
            React.createElement(MenuItem, { onClick: () => openInNewTab(polkastatsUri) }, "Polkastats"),
            React.createElement(BurnrDivider, null),
            React.createElement(ListItem, { dense: true },
                React.createElement(Typography, { variant: 'overline' }, "Export")),
            React.createElement(MenuItem, { onClick: () => downloadFile(userAddress, JSON.stringify(userJson), 'json') }, "JSON file"),
            React.createElement(MenuItem, { onClick: () => downloadFile(userAddress, userSeed, 'txt') }, "Seed Phrase"))));
};
export default AccountMenu;
//# sourceMappingURL=AccountMenu.js.map