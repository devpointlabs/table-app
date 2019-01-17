import styled from 'styled-components';
import { Button, Header, Image, Segment, Divider } from 'semantic-ui-react';

const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  font-size: ${props => props.large ? '4rem' : '2rem'} !important;
`;

// Filled puts border color as background
// Large makes button bigger
export const StyledButton = styled(Button)`
  color: white !important;
  border: 3px solid #b29d72 !important;
  margin: 1 0px !important;
  background-color: ${props => props.filled ? '#b29d72' : '#222222' } !important;
  font-size: ${props => props.large ? '20px' : '15px' } !important;
  height: ${props => props.large ? '60px' : '' } !important;
  width: ${props => props.large ? '175px' : '' } !important;
  padding: ${props => props.large ? '5px auto' : '' } !important;

  @keyframes glowing-border {
    from {
      border: 3px solid #b29d72 ;
    }
    
    to {
      outline: none;
      border: 3px solid cyan;
      box-shadow: 1px 1px 10px cyan;
    }
  }
  
  &:hover {
    animation-name: glowing-border;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transition: background 0.2s ease;
  }
`;