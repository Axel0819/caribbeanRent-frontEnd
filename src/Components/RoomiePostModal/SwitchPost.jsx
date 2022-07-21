import { FormControlLabel, FormGroup, Switch } from "@mui/material"

export const SwitchPost = () => {
    return (
        <FormGroup className="mb-3">
            <FormControlLabel control={<Switch defaultChecked />} label="¿Ya posees un alquiler?" />
        </FormGroup>
    )
}