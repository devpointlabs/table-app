import styled from 'styled-components';
import { Button, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


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