import styles from './buttonGoogle.module.css';

export const ButtonGoogle = () => {
    return (
        <div
            className={styles["google-btn"]}
            onClick={() => console.log("Click")}
        >
            <div className={styles["google-icon-wrapper"]}>
                <img className={styles["google-icon"]} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <div style={{ width:'calc(100% - 41px)' }} className="flex justify-content-center align-items-center">
                <p className={styles["btn-text"]}> <b>Continuar con google</b> </p>
            </div>
        </div>
    )
}