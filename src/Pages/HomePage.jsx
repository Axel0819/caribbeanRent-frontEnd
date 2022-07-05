import { CardRent } from '../Components/ui/CardRent';
import { Link } from 'react-router-dom';
import { CarouselApp } from '../Components/ui/CarouselApp';

// const Card = () => <Link to='rooms/2'>
//   <div style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: "375px",
//     minHeight: "521px",
//     backgroundColor: 'gray',
//     borderRadius: '5px'
//   }}>
//     Go to Room link
//   </div>
// </Link>

const alquileres = [
  {
    id: 1,
    title: "Santa Eduvijes, Limon",
    description:"Moderno apartamento en Limon",
    price:"105.000",
    date:"Jueves 6 de junio, 2022",
    images: [
      "https://picsum.photos/345/194",
      "https://picsum.photos/345/194",
      "https://picsum.photos/345/194",
    ]
  },
  {
    id: 2,
    title: "Santa Eduvijes, Limon",
    description:"Moderno apartamento en Limon",
    price:"105.000",
    date:"Jueves 6 de junio, 2022",
    images: [
      "https://picsum.photos/345/194",
      "https://picsum.photos/345/194",
      "https://picsum.photos/345/194",
    ]
  },
  {
    id: 3,
    title: "Santa Eduvijes, Limon",
    description:"Moderno apartamento en Limon",
    price:"105.000",
    date:"Jueves 6 de junio, 2022",
    images: [
      "https://picsum.photos/345/194",
      "https://picsum.photos/345/194",
      "https://picsum.photos/345/194",
    ]
  }
];


export const HomePage = () => {
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
        {/* <CardRent title="Santa Eduvijes, Limon" description="Moderno apartamento en Limon" price="105.000" date="Jueves 6 de junio, 2022" /> */}
        {/* <CardRent title="Santa Eduvijes, Limon" description="Moderno apartamento en Limon" price="105.000" date="Jueves 6 de junio, 2022" />
        <CardRent title="Santa Eduvijes, Limon" description="Moderno apartamento en Limon" price="105.000" date="Jueves 6 de junio, 2022" />
        <CardRent title="Santa Eduvijes, Limon" description="Moderno apartamento en Limon" price="105.000" date="Jueves 6 de junio, 2022" />
        <CardRent title="Santa Eduvijes, Limon" description="Moderno apartamento en Limon" price="105.000" date="Jueves 6 de junio, 2022" />
        <CardRent title="Santa Eduvijes, Limon" description="Moderno apartamento en Limon" price="105.000" date="Jueves 6 de junio, 2022" /> */}
        {/* <CarouselApp /> */}
      </div>
    </div>
  )
}