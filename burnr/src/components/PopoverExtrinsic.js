import React from 'react';
import { IconButton, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import CachedIcon from '@material-ui/icons/Cached';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(-0.5),
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}));
// @TODO blockexplorer links
const PopoverExtrinsic = ({ status }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose },
            status === 0 && React.createElement(CachedIcon, { color: 'disabled' }),
            status === 1 && React.createElement(CheckIcon, { color: 'action' }),
            status === 2 && React.createElement(ErrorIcon, { color: 'error' }),
            status === 3 && React.createElement(CircularProgress, null)),
        React.createElement(Popover, { elevation: 2, transitionDuration: 0, id: "mouse-over-popover", className: classes.popover, classes: {
                paper: classes.paper,
            }, open: open, anchorEl: anchorEl, anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, onClose: handlePopoverClose, disableRestoreFocus: true },
            React.createElement(Typography, { variant: 'body2' }, "The content of the Popover, link to BlockExplorers"))));
};
export default PopoverExtrinsic;
//# sourceMappingURL=PopoverExtrinsic.js.map