import { useContext } from 'react';
import { Divider } from '@mui/material';
import classNames from 'classnames';
import { RegisterContext } from '../../../../Services/Context/RegisterContext';
import { ButtonRegister } from './ButtonRegister';

export const TypeUserForm = () => {
    const { handleInputChange, handleNext, values } = useContext(RegisterContext)

    return (
        <div className="flex flex-column gap-20">
            <h3 style={{ color: '222222' }} className="text-xl font-normal text-center"> <b>¿Que deseas hacer?</b> </h3>

            {/* <hr style={{ color: '#3B7D7A' }} /> */}
            <Divider sx={{ backgroundColor: '#3B7D7A' }} />

            <ButtonRegister
                handleChange={ handleInputChange } 
                textButton="Buscar un alquiler"
                valueRolSelected={ values.role }
                typeUserRol={ 1 }
            />

            <ButtonRegister 
                handleChange={ handleInputChange }
                textButton="Publicar un alquiler"
                valueRolSelected={ values.role }
                typeUserRol={ 2 }
            />

            <button
                className={classNames('button-style', {
                    'button-disabled': values.role === 0,
                    'button-action': !(values.role === 0)
                })}
                onClick={ handleNext }
                disabled={ values.role === 0 ? true : false }
            >
                Continuar
            </button>
        </div>
    )
}
