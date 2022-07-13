import { useCallback, useState } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const InputPassword = ({ name, formik }) => {
    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    }

    const helperText = useCallback(() => {
        return formik.touched[name] && formik.errors[name] ? formik.errors[name] : '';
    }, [formik.touched, formik.errors, name]);

    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel sx={{ color: !!helperText() && '#d32f2f !important' }} htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                name={ name }
                label="Password"
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[name] && formik.errors[name] ? true : false}
            />
            {
                !!helperText() && <FormHelperText sx={{ color: '#d32f2f' }} required>{ helperText() }</FormHelperText>
            }

        </FormControl>
    )
}