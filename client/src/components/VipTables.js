import React from 'react';
import { StyledHeader, StyledSegment, StyledButton } from '../styles/Styles';
import { HeroWrapper, LayoutButton, } from '../styles/VipTableStyles'; 
import { Container, Modal, Icon, Header, Image, Segment} from 'semantic-ui-react'
import FloorPlan from '../images/Logo_Floorplan/Sky_SLC_Floor_Plan.png'

class VipTables extends React.Component {
  state = { isOpen: false, }

  toggleOpen = () => {
    const {isOpen} = this.state;
    this.setState({ isOpen: !isOpen});
  }

  renderModal = () => (
    <Modal open={this.state.isOpen}>
      <Modal.Header>
        <Header as='h2' textAlign='center'>Table Layout</Header>
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
      </StyledSegment>
      </>
    )
  }
}

export default VipTables;