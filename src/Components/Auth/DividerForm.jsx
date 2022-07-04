import { Divider } from '@mui/material';

export const DividerForm = () => {
  return (
    <div className="flex justify-content-center align-items-center w-full">
        <Divider sx={{ borderColor: '#3B7D7A', width: 'calc(50% - 10px)'}} />
        <p style={{ color: "#3B7D7A" }} className="mx-1">O</p>
        <Divider sx={{ borderColor: '#3B7D7A', width: 'calc(50% - 10px)'}} />
    </div>
  )
}
