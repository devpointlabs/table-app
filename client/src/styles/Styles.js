import styled from 'styled-components';
import { Button, Header, Image, Segment, Divider } from 'semantic-ui-react';

// Filled puts border color as background
// Large makes bigger
export const StyledButton = styled(Button)`
  color: white !important;
  border: 3px solid #b29d72 !important;
  border-radius: 0px !important;
  margin: 0px 10px !important;
  font-family: ${props => props.defaultFont ? 'none' : 'copperplate !important'}
  background-color: ${props => props.filled ? '#b29d72' : '#222222' } !important;
  font-size: ${props => props.large ? '20px' : '15px' } !important;
  height: ${props => props.large ? '60px' : '' } !important;
  width: ${props => props.large ? '175px' : '' } !important;
  padding: ${props => props.large ? '5px 5px' : '' } !important;

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

const fontSize = (size) => {
  switch(size) {
    case 'huge':
      return '60px';
    case 'large':
      return '30px';
    case 'small':
      return '15px';
    default:
      return '20px';
  }
};

// set fSize in component Large, Small makes changes size
// Underline will underline text
export const StyledHeader = styled(Header)`
  color: white !important;
  font-family: ${props => props.defaultFont ? 'none' : 'copperplate !important'}
  font-size: ${props => fontSize(props.fSize)} !important;
  text-decoration: ${props => props.underlined ? 'underline' : ''} !important;
  color: ${props => props.gray ? 'gray !important' : 'white !important'}
  color: ${props => props.black ? 'black !important' : 'white !important'}
  text-align: ${props => props.centered ? 'center !important' : 'none'}
  line-height: ${props => props.spaced ? '30px !important' : 'none' };
`;

// bordered adds colored border
// auto moves from 5% margin and a 10px bottom margin
export const StyledSegment = styled(Segment)`
  margin: ${props => props.auto ? 'auto' : '5%'} !important;
  margin-bottom: ${props => props.auto ? '10px' : ''} !important;
  padding: 5% !important;
  background-color: #000000 !important;
  border: ${props => props.bordered ? '3px solid #b29d72' : ''} !important;
`;

export const StyledDivider = styled(Divider)`
  width: 60% !important;
  height: 3px !important;
  background-color: #bdbdbd !important;
  margin: auto !important;
  margin-bottom: 25px !important;
`;

// small sets to the smaller bordered image size
export const StyledImage = styled(Image)`
  border: ${props => props.small ? '1px solid #bdbdbd' : '3px solid #b29d72'} !important;
  width: ${props => props.small ? '250px' : '400px'} !important;
  background-color: black !important;
`;

export const HeroImage = styled(Image)`
  border: ${props => props.active ? '3px solid #33db00' : '3px solid #db0000'} !important;
  width: 100% !important
`;