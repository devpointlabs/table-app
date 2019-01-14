import styled from 'styled-components';
import { Menu, Dropdown, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const StyledMenu = styled(Menu)`
  z-index: 1;
  background-color: #222222 !important;
  opacity: .93;
  position: fixed;
  width: 100%;
  margin-top: 0px;
  top: 0px;
`;

export const StyledItem = styled(Menu.Item)`
  color: white !important;
  font-size: 15px;
  border: 3px solid #b29d72;
  margin: 5px;
`; 

export const StyledLink = styled(Link)`
  color: ${ props => props.black ? 'black' : 'white'};
`;

export const StyledDrop = styled(Dropdown)`
  z-index: 2;
  position: relative;
  border: none;
  background-color: #383838 !important;
  color: white !important;
`;
