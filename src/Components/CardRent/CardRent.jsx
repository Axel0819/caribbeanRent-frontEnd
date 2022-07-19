import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActions, IconButton, Typography, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CarouselApp } from '../ui/CarouselApp';

export const CardRent = ({ id, title, description, price, date, images }) => {
    // el id será utilizado para realizar la consulta del alquiler
    const navigate = useNavigate();

    const handleClick = ({ target }) => {
        const typeButton = target.getAttribute('type') === 'button';
        const typeRole = target.getAttribute('role') === 'button';

        // si no se están tocando estos elementos, navega a la página
        if (!(typeButton || typeRole)) navigate(`rooms/${id}`);
    }

    return (
        <Card
            onClick={handleClick}
            sx={{
                maxWidth: 345,
                outline: '2px solid transparent',
                transition: 'outline-color .3s',
                '&:hover': {
                    cursor: 'pointer',
                    outline: '2px solid #4EC3BD'
                }
            }}
        >
            <CarouselApp images={images} />
            <CardContent>
                <Typography variant="h6" fontWeight={500}>
                    {title}
                </Typography>
                <Divider className="my-3" sx={{ backgroundColor: "#3B7D7A" }} />
                <Typography variant="body1">
                    {description}
                </Typography>
                <Typography className="my-3" variant="body1" fontWeight={700}>
                    ₡ {price} / mes
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {date}
                </Typography>
            </CardContent>
            <CardActions className="flex justify-content-end">
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
