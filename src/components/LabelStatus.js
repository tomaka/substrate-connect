import * as React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles(theme => ({
    root: {
        width: '345px !important',
        paddingLeft: theme.spacing(10),
    },
}));
const LabelStatus = ({ status }) => {
    const classes = useStyles();
    return (React.createElement(Button, { className: `${classes.root} ${status}`, variant: 'contained', disabled: true, startIcon: React.createElement(FiberManualRecordIcon, null) }, status));
};
export default LabelStatus;
//# sourceMappingURL=LabelStatus.js.map