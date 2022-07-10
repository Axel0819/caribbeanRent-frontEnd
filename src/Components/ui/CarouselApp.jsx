import { CardMedia } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';


export const CarouselApp = ({ images }) => {

    // onClickThumb={action('click thumb')} onClickItem={action('click item')} onChange={action('change')}
    return (
        <Carousel showThumbs={false}>
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