import { useContext, useLayoutEffect, useRef } from 'react';
import { ButtonGoogle } from '../ButtonGoogle';
import { DividerForm } from '../DividerForm';
import { HeadFormCredentials } from '../HeadFormCredentials';
import { RegisterContext } from '../../../Services/Context/RegisterContext';
import { InputForm } from '../InputForm';
import { InputPassword } from '../InputPassword';

export const FormRegisterUser = () => {
    const { formik } = useContext(RegisterContext);
    const divScroll = useRef();

    useLayoutEffect(() => {
        if (divScroll.current === undefined) return;
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

            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-column gap-20">
                    <div className="flex gap-20">
                        <InputForm
                            name="name"
                            type="text"
                            label="Nombre"
                            formik={formik}
                        />
                        <InputForm
                            name="apellido"
                            type="text"
                            label="Apellido"
                            formik={formik}
                        />
                    </div>

                    <div>
                        <InputForm
                            name="email"
                            type="email"
                            label="Correo"
                            formik={formik}
                        />
                    </div>

                    <div className="flex gap-20">
                        <InputPassword name="rPassword" label="Contraseña" formik={formik} />
                        <InputPassword name="rPasswordConfirmation" label="Confirmar" formik={formik} />
                    </div>

                    <button type="submit" className="button-style button-action">Registrarse</button>
                </div>
            </form >

        </div >
    )
}
