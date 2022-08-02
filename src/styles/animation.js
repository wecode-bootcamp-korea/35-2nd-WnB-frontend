import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

export const shadow = keyframes`
  from {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  to {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }
`;
