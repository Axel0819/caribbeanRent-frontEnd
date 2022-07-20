import { useNavigate } from 'react-router-dom';

export const Header = ({ isHome }) => {
    const navigate = useNavigate();

    const HomeText = () => {
        return (
            <>
                <div className="flex flex-column text-center">
                    <h1 className="mb-3">¡Tú <span style={{ color: "#4EC3BD" }}> apartamento</span> ideal en un sólo click!</h1>
                    <h3 className="mb-4">Encuentra apartamentos cómodos y flexibles de manera rápida</h3>
                </div>
            </>
        )
    }

    const RommieText = () => {
        return (
            <h1>¡Encuentra a tu <span style={{ color: "#4EC3BD" }}> rommie </span> en nuestra plataforma!</h1>
        )
    }

    return (
        <div className="mb-7 mt-8">
            <div className="flex justify-content-center align-items-center mb-7">
                <button
                    onClick={() => navigate('/')}
                    type="submit"
                    className="button-style button-action mr-8"
                    style={{ width: 350 }}
                >
                    <i className="fa-solid fa-house-chimney mr-3"></i>Buscar apartamento
                </button>

                <button
                    onClick={() => navigate('/post')}
                    type="submit" 
                    className="button-style button-action"
                    style={{ width: 350 }}
                >
                    <i className="fa-solid fa-user-group mr-3"></i>Buscar rommie
                </button>
            </div>

            <div className="flex justify-content-center align-items-center">
                {isHome ? <HomeText /> : <RommieText />}
            </div>

        </div>
    )
}
