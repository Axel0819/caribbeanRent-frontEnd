import { ButtonGoogle } from '../ButtonGoogle';
import { DividerForm } from '../DividerForm';
import { HeadFormCredentials } from '../HeadFormCredentials';
import { TextField } from '@mui/material';
import { ActionFooterAuth } from '../ActionFooterAuth';
import { useContext, useLayoutEffect, useRef } from 'react';
import { RegisterContext } from '../../../Services/Context/RegisterContext';

export const FormRegisterUser = () => {
    const { values, handleInputChange } = useContext(RegisterContext)
    const divScroll = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }

    useLayoutEffect(() => {
        if(divScroll.current === undefined) return;
        const scroll = divScroll.current;
        const startAnimateScroll = setTimeout(() => {
            if (scroll.scrollTop === 0) {
                scroll.scroll({ top: scroll.scrollHeight, behavior: 'smooth' });
            }
        }, 2500);
        return () => {
            clearTimeout(startAnimateScroll);
        }
    }, [])
    
    return (
        <div
            ref={divScroll}
            style={{
                overflowY: "scroll",
                height: "425px"
            }}
            className="flex flex-column align-items-center gap-20 px-3"
        >
            <HeadFormCredentials text={"Regístrate en"} />

            <ButtonGoogle />

            <DividerForm />

            <form onSubmit={handleSubmit}>
                <div className="flex flex-column gap-20">
                    <div className="flex gap-20">
                        <TextField label="Nombre" variant="outlined" />
                        <TextField label="Apellidos" variant="outlined" />
                    </div>

                    <div>
                        <TextField name="email" fullWidth label="Correo" value={values.email} onChange={handleInputChange} variant="outlined" />
                    </div>

                    <div className="flex gap-20">
                        <TextField name="password" value={values.password} onChange={handleInputChange} label="Contraseña" type="password" variant="outlined" />
                        <TextField label="Confirmar contraseña" variant="outlined" />
                    </div>

                    <button className="button-style button-action">Registrarse</button>
                </div>
            </form >

            <ActionFooterAuth
                text="¿Ya tienes cuenta?"
                actionText="Inicia sesión"
                actionHandle={() => console.log("Se procede abrir el modal del login")}
            />

        </div >
    )
}
