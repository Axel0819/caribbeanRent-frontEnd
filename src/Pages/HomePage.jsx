import { Link } from 'react-router-dom';

const Card = () => <Link to='rooms/2'>
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "375px",
    minHeight: "521px",
    backgroundColor: 'gray',
    borderRadius: '5px'
  }}>
    Go to Room link
  </div>
</Link>

export const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <hr />

      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}>
        {
           Array.from(Array(12).keys()).map(temp => (
              <Card key={temp}/>
          ))
        }
      </div>

    </div>
  )
}