import { useState } from 'react' 
import { Divider } from '@mui/material'

export const TypeUserForm = () => {
    const [userType, setUserType] = useState(0)

    const handleClick = (e) => {
        // setUserType(type)
        console.log(e.target);
    }

    console.log(userType);

    return (
        <div className="flex flex-column gap-20">
            <h2 className="text-center">¿Que deseas hacer?</h2>

            {/* <hr style={{ color: '#3B7D7A' }} /> */}
            <Divider sx={{ backgroundColor: '#3B7D7A' }} />

            <div 
                className="register-options-user flex justify-content-center py-4"
                tabIndex={1}
                onFocus={() => setUserType(1)}
                onBlur={() => setUserType(0)}
                >
                <div className="flex align-items-center gap-20">
                    <i className="fa-solid fa-magnifying-glass icon-size"></i>
                    <p>Buscar un alquiler</p>
                </div>
            </div>

            <div 
                className="register-options-user flex justify-content-center py-4" 
                tabIndex={1}
                onFocus={() => setUserType(2)}
                onBlur={() => setUserType(0)}
            >
                <div className="flex align-items-center gap-20">
                    <i className="fa-solid fa-pen-to-square icon-size"></i>
                    <p>Publicar un alquiler</p>
                </div>
            </div>
            {/* <div className="register-options-user" onClick={() => handleClick(2)}>Publicar un alquiler</div> */}

        </div>
    )
}
