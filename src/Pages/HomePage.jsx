import { CardRent } from '../Components/CardRent';
import { Header } from '../Components/Header/Header.jsx';

//esta información de alquileres es temporal
import { alquileres } from '../Services/data/alquileres';

export const HomePage = () => {
  return (
    <div>
      <Header isHome={true} />
      <div style={{
        display: 'flex',
        gap: '8px',
        rowGap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}>
        {
          alquileres.map(alq => (
            <CardRent key={alq.id} {...alq} />
          ))
        }
      </div>
    </div>
  )
}