import { CardMedia } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { Carousel } from 'react-responsive-carousel';


export const CarouselApp = ({ images }) => {

    return (
        <Carousel showThumbs={false} onClickThumb={action('click thumb')} onClickItem={action('click item')} onChange={action('change')}>
            {
                images.map((img, i) => (
                    <CardMedia
                        key={i}
                        component="img"
                        image={img}
                        alt={`Imgage number: ${i}`}
                    />
                ))
            }
        </Carousel>
    )
}