import { Box } from '@mui/material';
import { HeadFormCredentials } from '../HeadFormCredentials';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { ButtonGoogle } from '../ButtonGoogle';
import { DividerForm } from '../DividerForm';
import { ActionFooterAuth } from '../ActionFooterAuth';
import { InputPassword } from './InputPassword';
import { useContext } from 'react';
import { MainLayoutContext } from '../../../Services/Context/MainLayoutContext';
import { modalEnums } from '../../../Enums/modalEnums';

export const Login = () => {
    const { handleOpenModal } = useContext(MainLayoutContext)

    return (
        <>
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
                    actionHandle={() => handleOpenModal(modalEnums.register)}
                />
            </div>
        </>
    )
}
