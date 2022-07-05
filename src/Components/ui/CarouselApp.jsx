import { action } from '@storybook/addon-actions';
import { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';


export const CarouselApp = ({ images }) => {

    return (
        <Carousel showThumbs={false} onClickThumb={action('click thumb')} onClickItem={action('click item')} onChange={action('change')}>
            {
                images.map((img, i) => (
                    <img key={i} src={img} alt="Img random" />
                ))
            }
        </Carousel>
    )


}