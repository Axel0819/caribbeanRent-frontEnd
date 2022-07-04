import { useState } from 'react';
import { Divider } from '@mui/material';

export const TypeUserForm = ({ handleNext }) => {
    const [userType, setUserType] = useState(0) // aqui se guarda el tipo de usuario

    return (
        <div className="flex flex-column gap-20">
            <h3 style={{ color: '222222' }} className="text-xl font-normal text-center"> <b>¿Que deseas hacer?</b> </h3>

            {/* <hr style={{ color: '#3B7D7A' }} /> */}
            <Divider sx={{ backgroundColor: '#3B7D7A' }} />

            <div
                className="register-options-user flex justify-content-center py-4"
                tabIndex={1}
                style={{ backgroundColor: userType === 1 && "#3B7D7A",
                    color: userType === 1 && "#FFFFFF" }}
                onFocus={() => setUserType(1)}
                >
                <div className="flex align-items-center gap-20">
                    <i style={{ color: userType === 1 ? "white" : "#3B7D7A" }} className="fa-solid fa-magnifying-glass icon-size"></i>
                    <p>Buscar un alquiler</p>
                </div>
            </div>

            <div 
                className="register-options-user flex justify-content-center py-4" 
                tabIndex={1}
                style={{ backgroundColor: userType === 2 && "#3B7D7A",
                    color: userType === 2 && "#FFFFFF" }}
                onFocus={() => setUserType(2)}
            >
                <div className="flex align-items-center gap-20">
                    <i style={{ color: userType === 2 ? "white" : "#3B7D7A" }} className="fa-solid fa-pen-to-square icon-size"></i>
                    <p>Publicar un alquiler</p>
                </div>
            </div>

            <button 
                className={`button-style ${ userType === 0 ? "button-disabled" : "button-action" }` }
                onClick={ handleNext }
                disabled={userType === 0 ? true : false}
            >Continuar</button>
            {/* <div className="register-options-user" onClick={() => handleClick(2)}>Publicar un alquiler</div> */}

        </div>
    )
}
