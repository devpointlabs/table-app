import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

export const StyledMenu = styled(Menu)`
&&& {
  z-index : 1;
  background-color: gray !important;
  overflow: hidden;
  opacity: 0.9;
  position: fixed;
  width: 101%;
  padding: 20px;
}
`;

export const StyledItem = styled(Menu.Item)`
  color: white !important;
  font-size: 18px;
`;