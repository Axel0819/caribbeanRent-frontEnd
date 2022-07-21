import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10'
  }
];

function valuetext(value) {
  return `${value}`;
}

export const SliderPost = () => {
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={30}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="on"
        marks={marks}
        min={0}
        max={10}
      />
    </Box>
  );
}