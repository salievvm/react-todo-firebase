import React from 'react';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel } from '@material-ui/core';

export default function Switches(props) {
    const [state, setState] = React.useState({
        checkedA: props.checked,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.onChange(event.target.checked);
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                }
                label="Dark Theme"
            />

        </div>
    );
}
