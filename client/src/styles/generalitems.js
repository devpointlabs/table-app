import styled from 'styled-components';
import { Button, Header, Image, Segment, Divider } from 'semantic-ui-react';



export const StyledButton = styled(Button)`
  color: white !important;
  background-color: #222222 !important;
  font-size: 15px !important;
  border: 3px solid #b29d72 !important;
  margin: 1 0px !important;

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

 

export const StyledButton2 = styled(Button)`
  color: white !important;
  background-color: #b29d72 !important;
  font-size: 15px !important;
  margin: 5px;
  border: 3px solid #b29d72 !important;

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

export const StyledHeader = styled(Header)`
  font-size: ${props => props.large ? '30px !important' : props.small ? '15px !important' : '20px !important'}
  text-decoration: ${props => props.underline ? 'underline !important' : 'none'}
  font-family: ${props => props.copperplate ? 'copperplate !important' : 'none'}
  color: ${props => props.gray? 'gray !important' : 'white !important'}
`; 

export const StyledMainText = styled(Header)`
  color: white !important;
  font-size: 15px !important;
`; 

export const StyledImage = styled(Image)`
  border: 3px solid #b29d72 !important;
  max-width: 400px !important;
`; 

export const StyledSegment = styled(Segment)`
  margin: 5%;
  padding: 5%;
  background-color: #000000 !important;
`;

export const StyledSegment2 = styled(Segment)`
  margin: auto !important;
  margin-bottom: 10px !important;
  padding: 5%;
  background-color: #000000 !important;
  border: 3px solid #b29d72 !important;
`;

// export const StyledDivider = styled(Divider)`
//   width: 60% !important;
//   height: 3px !important;
//   background-color: #bdbdbd !important;
//   margin: auto !important;
//   margin-bottom: 25px !important;
// `;

export const StyledComingImage = styled(Image)`
  border: 1px solid #bdbdbd !important;
  width: 250px !important;
  background-color: black !important;
`; 

export const GoldButton = styled(Button)`
  color: white !important;
  border: 3px solid #b29d72 !important;
  background-color: #b29d72 !important;
  height: 60px;
  width: 175px;
  padding: 5px auto;
  margin-top: -15px;
  font-size: 18px !important;
  font-family: times new roman;
  margin: 10px;

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

// I didnt know this would work but it did and i did it all by my self and i am very proud and nobody helped me and its super cool, wow good job joe
export const Line = styled.div(
  props => props.vertical ? 
  `
  border-left: 1px solid #363636;
  height: 80vh;
  ` :
  `
  border-top: 1px solid #363636;
  width 90%;
  margin: auto;
  margin-top: ${props => props.padded ? '50px' : '20px'};
  margin-bottom: ${props => props.padded ? '50px' : '20px'};
  `
);