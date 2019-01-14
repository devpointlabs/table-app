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