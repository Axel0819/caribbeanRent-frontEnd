import { Button, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { SliderPost } from "./SliderPost";
import { SwitchPost } from "./SwitchPost";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";

export const RoomiePostModal = () => {
  return (
    <div style={{ width: '500px' }}>
      <Typography className="flex justify-content-center mb-3" variant="subtitle1">Crear publicación</Typography>
      <Divider className="mb-3" sx={{ borderColor: '#3B7D7A' }} />
      <div className="flex justify-content-start align-items-center gap-3 mb-3">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div className="flex flex-column">
          <Typography className="" variant="body1">Rafael Sequeira</Typography>
          <Typography variant="caption">Jueves 16 de junio, 2020</Typography>
        </div>
      </div>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="¡Agrega una descripción para encontrar a tu rommie!"
        multiline
        rows={5}
        placeholder="¡Agrega una descripción para encontrar a tu rommie!"/>
      <Divider className="mt-3 mb-3" sx={{ borderColor: '#3B7D7A' }} />
      <SwitchPost />
      <Divider className="mb-3" sx={{ borderColor: '#3B7D7A' }} />
      <Typography className="mb-2" variant="body1">¿Cuántas personas buscas?</Typography>
      <SliderPost />
      <Button className="mt-3" sx={{ width: '500px' }} variant="contained">Publicar</Button>
    </div>
  )
}