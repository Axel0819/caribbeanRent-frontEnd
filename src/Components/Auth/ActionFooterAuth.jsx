import { Typography } from '@mui/material';

export const ActionFooterAuth = ({ text, actionText, actionHandle }) => {
    return (
        <div className={`w-full flex justify-content-${ actionText === "Regístrate" ? "center": "end"}`}>
            <Typography variant="caption" display="block" gutterBottom>
                { text } <span
                    onClick={ actionHandle }
                    className="span-action"
                >{ actionText }</span>
            </Typography>
        </div>
    )
}