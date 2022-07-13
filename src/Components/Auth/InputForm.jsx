import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

// ...rest: type, label
export const InputForm = ({ name, formik, ...rest }) => {
    return (
        <TextField
            name={ name }
            fullWidth
            variant="outlined"
            value={ formik.values[name] }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            error={ formik.touched[name] && formik.errors[name] ? true : false}
            helperText={ formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''}
            { ...rest }
        />
    )
}

InputForm.propTypes = {
    name: PropTypes.string.isRequired
}
