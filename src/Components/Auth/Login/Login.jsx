import { Box } from '@mui/material'
import React from 'react'
import { HeadFormCredentials } from '../HeadFormCredentials'
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { ButtonGoogle } from '../ButtonGoogle';
import { DividerForm } from '../DividerForm';
import { ActionFooterAuth } from '../ActionFooterAuth';

export const Login = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{ width: '450px' }}>
            <div className="flex flex-column align-items-center gap-20 px-3">
                <HeadFormCredentials text={"Bienvenido a"} />
                <Divider sx={{ borderColor: '#3B7D7A', width: '450px' }} />
                <form className='w-full'>
                    <div className="flex flex-column gap-20">
                        <TextField type="email" fullWidth label="Correo" variant="outlined" />
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <button className="button-style button-action">Continuar</button>
                    </div>
                </form >
                <DividerForm />

                <ButtonGoogle />

                <ActionFooterAuth
                    text="¿No tienes cuenta?"
                    actionText="Regístrate"
                    actionHandle={() => console.log("Se procede abrir el modal del login")}
                />
            </div>
            {/* <div>Login</div> */}
        </Box>
    )
}
