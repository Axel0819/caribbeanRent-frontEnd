import { Typography, Divider, Button } from "@mui/material";
import { SliderFilter } from "./SliderFilter";
import TextField from "@mui/material/TextField";
import { Checkbox } from "./Checkbox";


export const FilterModal = () => {
    return (
        <div style={{ width: '800px' }}>
            <Typography className="flex justify-content-center mb-3" variant="subtitle1">Filtrar búsqueda</Typography>
            <Divider className="mb-3" sx={{ borderColor: '#3B7D7A' }} />
            <Typography variant="subtitle1">Rango de precios</Typography>
            <div className="flex justify-content-center mt-4 mb-3">
                <SliderFilter />
            </div>
            <div className="flex justify-content-center gap-3 mb-5">
            <TextField id="outlined-basic" label="Precio mínimo" variant="outlined" />
            <span style={{color: "#3B7D7A"}} className="flex justify-content center align-items-center"> - </span>
            <TextField id="outlined-basic" label="Precio máximo" variant="outlined" />
            </div>
            <Divider className="mb-3" sx={{ borderColor: '#3B7D7A' }} />
            <Typography variant="subtitle1">Servicios</Typography>
            <Checkbox/>
            <Divider className="mb-3" sx={{ borderColor: '#3B7D7A' }} />
            <Typography variant="subtitle1">Habitaciones y precios</Typography>
            <Divider className="mb-3" sx={{ borderColor: '#3B7D7A' }} />
            <div className="flex justify-content-end gap-2">
            <Button variant="outlined" size="small"> Quitar filtro</Button>
            <Button variant="outlined" size="small"> Iniciar Búsqueda</Button>
            </div>
        </div>
    )
}