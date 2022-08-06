import React from 'react';
import { styled } from '@mui/system';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function Bed({ bedValue, changeBedValue }) {
  return (
    <StyledToggleButtonGroup
      size="Large"
      exclusive
      value={bedValue}
      onChange={changeBedValue}
    >
      {Bedroom.map(value => {
        return (
          <CustomToggleButton key={value.id} value={value.value}>
            {value.name}
          </CustomToggleButton>
        );
      })}
    </StyledToggleButtonGroup>
  );
}

const Bedroom = [
  { id: 0, value: 0, name: '상관없음' },
  { id: 1, value: 1, name: 1 },
  { id: 2, value: 2, name: 2 },
  { id: 3, value: 3, name: 3 },
  { id: 4, value: 4, name: 4 },
  { id: 5, value: 5, name: 5 },
  { id: 6, value: 6, name: 6 },
  { id: 7, value: 7, name: 7 },
  { id: 8, value: 8, name: 8 },
];

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  display: 'flex',
  gap: '20px',

  '&.MuiToggleButtonGroup-grouped': {
    margin: '10px',
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: '1rem',
    },
    '&:first-of-type': {
      borderRadius: '1rem',
    },
  },
});

const CustomToggleButton = styled(ToggleButton)({
  width: 'fit-contents',
  padding: '8px 22px',
  color: 'black',
  border: 0,
  borderRadius: 0,

  '&.Mui-selected': {
    color: 'white',
    backgroundColor: 'white',
    zIndex: '-2',

    span: {
      '&.MuiTouchRipple-root': {
        backgroundColor: 'black',
        zIndex: '-1',
      },
    },
  },

  '&:hover': {
    backgroundColor: 'white',

    span: {
      '&.MuiTouchRipple-root': {
        border: '1px solid black',
      },
    },
  },

  '&.MuiToggleButton-primary': {
    backgroundColor: 'black',

    span: {
      backgroundColor: 'rgba(0,0,0,0.05)',
    },
  },

  span: {
    '&.MuiTouchRipple-root': {
      border: '1px solid rgba(0,0,0,0.3)',
      borderRadius: '2rem',
    },
  },
});
