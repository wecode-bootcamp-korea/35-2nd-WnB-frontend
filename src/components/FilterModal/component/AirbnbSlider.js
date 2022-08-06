import React from 'react';
import { styled } from '@mui/system';
import { Box, Slider } from '@mui/material';

const AirbnbSlider = ({
  minValue,
  maxValue,
  setValue,
  handleChange,
  value,
  inputChange,
}) => {
  return (
    <Box sx={{ width: 650 }}>
      <Airbnb
        getAriaLabel={() => 'Price range'}
        value={value.value}
        min={value.min}
        max={value.max}
        step={100}
        onChange={handleChange}
        onChangeCommitted={inputChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
};

export default AirbnbSlider;

const Airbnb = styled(Slider)({
  color: '#7a0bc0',
  height: 2,
  padding: '13px 0',
  width: '650px',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid #222',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: '#222',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    color: '#222',
    height: 2,
  },
  '& .MuiSlider-rail': {
    color: 'rgba(0,0,0,0.2)',
    opacity: 1,
    height: 2,
  },
});
