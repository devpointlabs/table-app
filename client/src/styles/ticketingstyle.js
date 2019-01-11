import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

//in Ticketing.js paste: import { GridRow, GridText, GridWrapper, HeaderRow, HeaderText} from '../styles/ticketingstyle';
//image

// wraps the entire grid to apply the global style components (black background flex align etc)
export const GridWrapper = styled.div`
  display: flex;
  background-color: black;
  height: 100vh;
  align-items: center;
`;

// use in place of Grid.Row
export const GridRow = styled(Grid.Row)`
  background-color: black !important;
`;

// use for all text besides HeaderText, ex. <Grid.Column width={4}><GridText small>Pre-Sale <br/> Gen.ADM</GridText></Grid.Column>
// small and large text size props, as well as a the gold text prop
export const GridText = styled.p`
  font-size: ${props => props.large ? '25px' : props => props.small ? '11px' : '18px'} !important;
  color: ${props => props.gold ? '#b29d72' : 'white'};
  font-family: futura;
  background-color: ${props => props.gray ? '#222222' : 'black'} !important;
  text-align: center;
  padding: 5px;
`;

// Use HeaderRow for the Ticket Price QTY etc. header for the grid, has the lighter gray background
export const HeaderRow = styled(Grid.Row)`
  display: flex;
  justify-content: space-between;
  background-color: #222222 !important;
`;

// use for the text inside of the HeaderRow
export const HeaderText = styled.p`
  font-size: 18px;
  color: ${props => props.gold ? '#b29d72' : 'white'};
  font-family: futura;
  text-align: center;
`;