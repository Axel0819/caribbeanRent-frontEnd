import { Box } from '@mui/material';
import { HeadFormCredentials } from '../HeadFormCredentials';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { ButtonGoogle } from '../ButtonGoogle';
import { DividerForm } from '../DividerForm';
import { ActionFooterAuth } from '../ActionFooterAuth';
import { InputPassword } from './InputPassword';

export const Login = () => {
    
    return (
        <Box sx={{ width: '450px' }}>
            <div className="flex flex-column align-items-center gap-20 px-3">
                <HeadFormCredentials text={"Bienvenido a"} />

                <Divider sx={{ borderColor: '#3B7D7A', width: '450px' }} />

                <form className='w-full'>
                    <div className="flex flex-column gap-20">
                        <TextField type="email" fullWidth label="Correo" variant="outlined" />
                        <InputPassword />

                        <button className="button-style button-action">Continuar</button>
                    </div>
                </form >

                <DividerForm />

                <ButtonGoogle />

                <ActionFooterAuth
                    text="¿No tienes cuenta?"
                    actionText="Regístrate"
                    actionHandle={() => console.log("Se procede abrir el modal de registro")}
                />
            </div>
        </Box>
    )
}
