import { Typography } from '@mui/material';

export const ActionFooterAuth = ({ text, actionText, actionHandle }) => {
    return (
        <div className={`w-full flex justify-content-${actionText === "Regístrate" ? "center" : "end"}`}>
            <Typography variant="caption" display="block" gutterBottom>
                {text} <span
                    style={{
                        borderBottom: '1px solid #4EC3BD',
                        color: '#4EC3BD'
                    }}
                    onClick={actionHandle}
                    className="span-action cursor-pointer"
                >{actionText}</span>
            </Typography>
        </div >
    )
}