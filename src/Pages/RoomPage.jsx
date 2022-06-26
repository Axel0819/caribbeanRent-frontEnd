import { useParams } from 'react-router-dom';

export const RoomPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>RoomPage</h1>
            <p>Alquiler a consultar es: { id }</p>
        </div>
    )
}
