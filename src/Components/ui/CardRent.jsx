import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider } from '@mui/material';
import { CarouselApp } from './CarouselApp';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const CardRent = ({ id, title, description, price, date, images }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // Destructuracion
    // const {text} = props

    return (
        <Card className="card-styles" sx={{ maxWidth: 345 }}>
            <CarouselApp images={images} />
            {/* <CardMedia
                component="img"
                height="194"
                image="https://economipedia.com/wp-content/uploads/Alquiler-1-1.jpg"
                alt="Paella dish"
            /> */}
            <CardContent>
                <Typography variant="h6" fontWeight={500}>
                    {title}
                    {/*Santa Eduvijes, Limón */}
                </Typography>
                <Divider className="my-3" sx={{ backgroundColor: "#3B7D7A" }} />
                <Typography variant="body1">
                    {description}
                    {/* Moderno apartamento en zona segura de Limón */}
                </Typography>
                <Typography className="my-3" variant="body1" fontWeight={700}>
                    ₡ {price} / mes
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {/* Jueves 16 de junio, 2020 */}
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
