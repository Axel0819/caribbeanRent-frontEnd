import classNames from 'classnames';
import styles from './typeUserForm.module.css';

//typeUserRol: Tipo de usuario, valueRolSelected: Tipo de usuario seleccionado
export const ButtonRegister = ({ handleChange, typeUserRol, valueRolSelected, textButton }) => {
    const valueUser = valueRolSelected === typeUserRol;

    return (
        <div
            className={
                classNames(styles['register-options-user'], 
                'flex justify-content-center py-4')
            }
            tabIndex={1}
            style={{
                backgroundColor: valueUser && "#3B7D7A",
                color: valueUser && "#FFFFFF"
            }}
            onFocus={() => handleChange({ target: { name: 'role', value: typeUserRol } })}
        >
            <div className="flex align-items-center gap-20">
                <i style={{ color: valueUser ? "white" : "#3B7D7A" }} className="fa-solid fa-magnifying-glass icon-size"></i>
                <p>{textButton}</p>
            </div>
        </div>
    )
}