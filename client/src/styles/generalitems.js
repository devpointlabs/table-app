import styled from 'styled-components';
import { Button, Header, Image, Segment, Divider } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
  color: white !important;
  background-color: #222222 !important;
  font-size: 15px !important;
  border: 3px solid #b29d72 !important;
  margin: 5px;
`; 

export const StyledHeader = styled(Header)`
  color: white !important;
  font-size: 30px !important;
  text-decoration: underline !important;
`; 

export const StyledHeader2 = styled(Header)`
  color: white !important;
  font-size: 30px !important;
`; 

export const StyledSubHeader = styled(Header)`
  color: white !important;
  font-size: 20px !important;
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

export const StyledDivider = styled(Divider)`
  width: 60% !important;
  height: 3px !important;
  background-color: #bdbdbd !important;
  margin: auto !important;
  margin-bottom: 25px !important;
`;

export const StyledComingImage = styled(Image)`
  border: 1px solid #bdbdbd !important;
  max-width: 250px !important;
`; 

export const GoldButton = styled.button`
  color: #eee;
  border: 2px solid #c4ae85;
  background-color: #baa06f;
  height: 60px;
  width: 175px;
  padding: 5px auto;
  margin-top: -15px;
  font-size: 30px;
  font-family: times new roman;
  margin: 10px;
`;

// I didnt know this would work but it did and i did it all by my self and i am very proud and nobody helped me and its super cool, wow good job joe
export const Line = styled.div(
  props => props.vertical ? 
  `
  border-left: 1px solid #363636;
  height: 100vh;
  margin: auto;
  ` :
  `
  border-top: 1px solid #363636;
  width 90%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  `
);