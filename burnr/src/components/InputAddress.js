import React, { useEffect, useState } from 'react';
import { FormControl, TextField, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Identicon from '@polkadot/react-identicon';
const InputAddress = ({ setAddress }) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        setAddress(value);
    }, [value, setAddress]);
    const handleChangeButton = (e) => {
        const val = e.currentTarget.value;
        setValue(val);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { marginY: 1 },
            React.createElement(FormControl, { required: true, fullWidth: true },
                React.createElement(TextField, { label: "Recepient Address", onChange: handleChangeButton, onFocus: handleChangeButton, onBlur: handleChangeButton, value: value, variant: "outlined", fullWidth: true, InputProps: {
                        spellCheck: 'false',
                        startAdornment: React.createElement(Box, { marginRight: 1 }, (!value || value === '')
                            ? React.createElement(Skeleton, { variant: 'circle', width: 32, height: 32 })
                            : React.createElement(Identicon, { size: 32, theme: 'polkadot', value: value })),
                    } })))));
};
export default React.memo(InputAddress);
//# sourceMappingURL=InputAddress.js.map