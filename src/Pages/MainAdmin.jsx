import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { startLogout } from '../Services/Store/slices/auth/actions';

export const MainAdmin = () => {
  const dispatch = useDispatch()
  
  
  return (
    <div>
      <Link to="/">
        <div>MainAdmin</div>
      </Link>
      

      <button 
        onClick={() => dispatch(startLogout())}
        >Close</button>


    </div>
  )
}