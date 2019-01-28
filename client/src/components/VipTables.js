import React from 'react';
import { StyledHeader, StyledSegment, StyledButton } from '../styles/Styles';
import { HeroWrapper, LayoutButton, } from '../styles/VipTableStyles'; 
import { Container, Modal, Icon, Image, Segment} from 'semantic-ui-react'
import FloorPlan from '../images/Logo_Floorplan/Sky_SLC_Floor_Plan.png'
import ReservationsForm from './ReservationsForm';

class VipTables extends React.Component {
  state = { isOpen: false, }

  toggleOpen = () => {
    const {isOpen} = this.state;
    this.setState({ isOpen: !isOpen});
  }

  renderModal = () => (
    <Modal open={this.state.isOpen}>
      <Modal.Header>
        <StyledHeader black fSize='large' textAlign='center'>Table Layout</StyledHeader>
      </Modal.Header>
      <Segment basic textAlign='center'>
        <Image src={FloorPlan} style={{margin: 'auto'}} />
        <StyledButton onClick={() => this.toggleOpen()} >Close</StyledButton>
      </Segment>
    </Modal>
  )

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
        <LayoutButton icon onClick={() => this.toggleOpen()}><Icon name='zoom in' /> View Table Layout</LayoutButton>
        { this.renderModal() }
        <Segment basic style={{marginLeft: '75px', marginRight: '75px'}}>
          <StyledHeader fSize='small'>
            We give our patrons the opportunity to see world class shows in an intimate and eclectic setting. VIP Table Service allows you to experience these events by reserving your own private space, skipping the lines at the door, avoiding the lines at the bar, and most importantly, enjoying the show with the people you came to see it with. Whether you like to be the center of attention or enjoy the show privately from above, we’ve got the spot for you!
          </StyledHeader>
        </Segment>
        <Container>
        <ReservationsForm history={this.props.history}  />
        </Container>
      </StyledSegment>
      </>
    )
  }
}

export default VipTables;