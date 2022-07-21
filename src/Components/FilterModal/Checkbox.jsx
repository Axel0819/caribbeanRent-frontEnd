import { FormControlLabel, FormGroup} from "@mui/material"
export const Checkbox = () => {
    return (
        <div className="grid">
            <div className="col">
                <div className="flex flex-column gap-20">

                </div>
            </div>
            <div className="col">
                <div className="flex flex-column gap-20">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup>
                </div>
            </div>
            <div className="col">
                <div className="flex flex-column gap-20"> TextFileds...</div>
            </div>
        </div>
    )
}