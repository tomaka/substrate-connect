import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Popover } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
const useStyles = makeStyles((theme) => ({
    trigger: {
        marginLeft: theme.spacing(0.5),
        '& svg': {
            fontSize: '1em',
        },
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}));
const PopoverInfo = ({ children }) => {
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
        React.createElement("a", { onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose, className: classes.trigger },
            React.createElement(InfoOutlinedIcon, { color: 'disabled' })),
        React.createElement(Popover, { onClose: handlePopoverClose, open: open, anchorEl: anchorEl, elevation: 2, transitionDuration: 0, className: classes.popover, classes: {
                paper: classes.paper,
            }, anchorOrigin: {
                vertical: -4,
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, marginThreshold: 2 },
            React.createElement(Typography, { variant: 'body2', component: 'div' }, children))));
};
export default PopoverInfo;
//# sourceMappingURL=PopoverInfo.js.map