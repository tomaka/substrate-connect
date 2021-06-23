var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { InputBase, ClickAwayListener, Typography, Box } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ALL_PROVIDERS } from '../utils/constants';
import { useLocalStorage, useApi } from '../hooks';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DoneIcon from '@material-ui/icons/Done';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles((theme) => createStyles({
    nodeSelectorWrap: {
        position: 'relative',
        height: '60px',
        borderTopRightRadius: theme.spacing(0.5),
        borderTopLeftRadius: theme.spacing(0.5),
        backgroundColor: theme.palette.background.paper,
    },
    nodeSelectorInner: {
        position: 'absolute',
        zIndex: theme.zIndex.modal,
        width: '100%',
        borderRadius: theme.spacing(0.5),
        backgroundColor: theme.palette.background.paper,
        '&.open': {
            boxShadow: theme.shadows[2],
        },
    },
    autocompleteInput: {
        '& input': {
            padding: theme.spacing(),
            marginLeft: theme.spacing(),
            marginRight: theme.spacing(),
            borderRadius: theme.spacing(),
            border: `1px solid ${theme.palette.divider}`,
        },
    },
    autocompletePopper: {
        position: 'relative',
    },
    autocompleteOption: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
        borderRadius: theme.spacing(),
    },
}));
const options = Object.entries(ALL_PROVIDERS).map(([provider, settings]) => ({
    network: settings.network,
    client: settings.client,
    provider
})).sort((a, b) => (a.network > b.network) ? 1 : ((b.network > a.network) ? -1 : 0));
export default function NodeSelector() {
    var _a, _b, _c;
    const classes = useStyles();
    const api = useApi();
    const [localEndpoint, setLocalEndpoint] = useLocalStorage('endpoint');
    const endpointName = localEndpoint || 'Westend-WsProvider';
    const [provider, setProvider] = useState((_a = ALL_PROVIDERS[endpointName]) === null || _a === void 0 ? void 0 : _a.id);
    const [open, setOpen] = useState(false);
    const [fiberColor, setFiberColor] = useState('error');
    const toggleOpen = () => {
        setOpen(!open);
    };
    const handleClose = (event, reason) => {
        if (reason === 'toggleInput') {
            return;
        }
        setOpen(false);
    };
    const updateProvider = (provider) => {
        var _a;
        setLocalEndpoint(provider);
        setProvider(provider);
        console.log("Burnr wallet is now connected to", (_a = ALL_PROVIDERS[provider]) === null || _a === void 0 ? void 0 : _a.endpoint);
        // Tis is just a temporary work around. Api should be passed on as prop without reload
        location.reload();
        // setChain(REMOTE_PROVIDERS[selectedEndpoint].network);
    };
    useEffect(() => {
        const getColor = (api) => __awaiter(this, void 0, void 0, function* () {
            if (api && (yield api.isReady)) {
                setFiberColor('primary');
            }
        });
        api && getColor(api);
    }, [api]);
    return (React.createElement(ClickAwayListener, { onClickAway: handleClose },
        React.createElement("div", { className: classes.nodeSelectorWrap },
            React.createElement("div", { className: `${classes.nodeSelectorInner} ${open ? 'open' : ''}` },
                React.createElement(Box, { display: 'flex', alignItems: 'center', pt: 1.5, pb: 1.5, pl: 0.5, pr: 0.5, onClick: toggleOpen },
                    React.createElement(FiberManualRecordIcon, { style: { fontSize: '16px', marginRight: 4 }, color: fiberColor }),
                    React.createElement(Box, { width: '100%' },
                        React.createElement(Typography, { variant: 'h4' }, (_b = ALL_PROVIDERS[provider]) === null || _b === void 0 ? void 0 : _b.network),
                        React.createElement(Typography, { variant: 'body2', color: 'textSecondary' }, (_c = ALL_PROVIDERS[provider]) === null || _c === void 0 ? void 0 :
                            _c.client,
                            " client")),
                    open ? React.createElement(ArrowDropUpIcon, null) : React.createElement(ArrowDropDownIcon, null)),
                open &&
                    React.createElement(Autocomplete, { open: true, options: options, classes: {
                            option: classes.autocompleteOption,
                            popper: classes.autocompletePopper,
                        }, renderOption: (option) => (React.createElement(React.Fragment, null,
                            option.network,
                            React.createElement(DoneIcon, { fontSize: 'small', style: {
                                    visibility: option.provider === provider ? 'visible' : 'hidden'
                                } }))), getOptionLabel: (option) => option.network, 
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange: (event, { provider: selected }) => {
                            updateProvider(selected);
                        }, disablePortal: true, renderInput: (params) => (React.createElement(InputBase, { ref: params.InputProps.ref, inputProps: params.inputProps, autoFocus: true, className: classes.autocompleteInput, fullWidth: true, placeholder: 'select node provider' })) })))));
}
//# sourceMappingURL=NodeSelector.js.map