import React from 'react';
import { Button, Grid, TextField, Box, InputAdornment } from '@material-ui/core';
import BN from 'bn.js';
const InputFunds = ({ total, setAmount, currency, hidePercentages = false }) => {
    // const [value, setValue] = React.useState<string>('');
    const [showValue, setShowValue] = React.useState('');
    const handleClickButton = (e) => {
        var _a;
        const val = ((new BN(e.currentTarget.value)).mul(total)).toString();
        setAmount(val);
        (_a = document.getElementById('SendFundsAmountField')) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const v = parseFloat(value);
        setShowValue(value !== '' ? value : '');
        setAmount(value !== '' ? (v * 1000000000000).toString() : '0');
    };
    // @TODO focus/blur TextField and %Buttons at the same time in a React way
    const [focus, setFocus] = React.useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(TextField, { id: 'SendFundsAmountField', value: showValue, label: "Amount", fullWidth: true, type: "number", variant: "outlined", onChange: handleChange, onFocus: handleFocus, onBlur: handleFocus, InputProps: {
                    fullWidth: true,
                    endAdornment: React.createElement(InputAdornment, { position: "start" }, currency),
                } })),
        !hidePercentages && (React.createElement(Grid, { container: true, spacing: 1 }, [
            { label: '25%', value: 0.25 },
            { label: '50%', value: 0.5 },
            { label: '75%', value: 0.75 },
            { label: '100%', value: 1 }
        ].map((item, index) => {
            return (React.createElement(Grid, { key: index, item: true },
                React.createElement(Button, { onClick: handleClickButton, variant: 'outlined', color: focus ? 'primary' : 'default', size: 'small', value: item.value }, item.label)));
        })))));
};
export default InputFunds;
//# sourceMappingURL=InputFunds.js.map