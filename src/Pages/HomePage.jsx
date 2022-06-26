import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <hr />

      <Link to='rooms/2'>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 150,
          backgroundColor: 'gray',
          borderRadius: '5px',
          margin: '20px'
        }}>
          Go to Room link
        </div>
      </Link>

    </div>
  )
}