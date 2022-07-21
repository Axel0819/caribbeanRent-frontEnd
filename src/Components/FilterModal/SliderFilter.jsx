import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export const SliderFilter = () => {
  const [value, setValue] = React.useState([50000, 150000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 20000,
      label: '20000',
    },
    {
      value: 350000,
      label: '350000'
    }
  ];

  return (
    <Box sx={{ width: 732}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks = {marks}
        min= {20000}
        max= {350000}
      />
    </Box>
  );
}
