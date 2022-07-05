import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newResetForm = initialState ) => {
        setValues( newResetForm );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    const handleRole = (num) => {

        setValues({
            ...values,
            role: num
        });

    }

    return [ values, handleInputChange, handleRole, reset ];

}