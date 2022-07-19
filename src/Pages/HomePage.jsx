import { CardRent } from '../Components/CardRent';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//esta información de alquileres es temporal
import { alquileres } from '../Services/data/alquileres';
import { usersEnums } from '../Enums/usersEnums';
import { useEffect } from 'react';

export const HomePage = () => {
  const { role } = useSelector(state => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
        if(role === usersEnums.admin){
            navigate('admin/dashboard');
        }
    }, [role, navigate])
  
  return (
    <div>
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