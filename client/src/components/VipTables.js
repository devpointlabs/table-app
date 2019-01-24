import React from 'react';
import { StyledHeader, StyledSegment } from '../styles/Styles';
import { HeroWrapper, } from '../styles/VipTableStyles'; 
import { Container, Modal } from 'semantic-ui-react'
import FloorPlan from '../images/Logo_Floorplan/Sky_SLC_Floor_Plan.png'

class VipTables extends React.Component {


  render() {
    return(
      <>
      <HeroWrapper>
        <Container style={{margin: 'auto', }}>
          <StyledHeader fSize='huge'>
            Time To Party
          </StyledHeader>
        </Container>
      </HeroWrapper>
      <StyledSegment fluid textAlign='center' auto>
        <StyledHeader fSize='huge' underlined>
        VIP Table Reservations
        </StyledHeader>
      </StyledSegment>
      </>
    )
  }
}

export default VipTables;