import React from 'react';
import { Table, Grid, Divider, Icon, Input, Label, Segment, Header, Container, Modal } from 'semantic-ui-react';
import { StyledSegment } from '../styles/AdminDashboardStyle'
import { StyledButton, StyledHeader } from '../styles/Styles'
import axios from "axios"
import { AuthConsumer, } from "../providers/AuthProvider";
import { format } from 'date-fns'
import BraintreeDrop from './BraintreeDrop';


class Cart extends React.Component {

  state = { 
    tickets : [
      {event_date: "Jan 1st" , host: "NSP Rock Hard Tour" , quantity: 2 , price: 30 , },
    ],
    isOpen: false,
    subtotal: 0,
    surcharge: 2,
    IETax: 3,
    salesTax: 4,
    venueFee: 5,
    total: 0, 
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.auth.user.id}/cart`)
    .then( res => {
      this.setState({ tickets: [...res.data] }, () => this.dateFormat());
    })
        .then ( res => {
          this.calculate()
    })
    .catch( err => {
      console.log(err);
    })
  }

  calculate = () => {
    this.setState({subtotal: 0, surcharge: 2, IETax: 3, salesTax: 4, venueFee: 5, total: 0, })
    this.state.tickets.map( t => (
      this.setState({ subtotal: this.state.subtotal + (t.price * t.quantity)}),
      this.setState({ 
        surcharge: this.state.subtotal * 0.05,
        IETax: this.state.subtotal * 0.05,
        salesTax: this.state.subtotal * 0.08,
        venueFee: this.state.subtotal * 0.1
      }),
      this.setState({ total: this.state.subtotal + this.state.surcharge + this.state.IETax + this.state.salesTax + this.state.venueFee})


    ))
  }

  dateFormat = () => {
    this.state.tickets.map( t => (
      t.event_date = format(
        new Date(t.event_date),
        'MMM Do'
      ),
    this.setState({ event_date: t.event_date }
      //  () => this.timeFormat()
    )
    ))
  }

  timeFormat = () => {
    var tresult = format(
      new Date(this.state.event_time),
      'h:mm A'
    )
    this.setState({ time: tresult, })
  }

  rendertickets () {
    const { tickets } = this.state
    return(
    tickets.map( t => (
        <Table.Row textAlign="center">
          <Table.Cell content={t.event_date}/>
          <Table.Cell content={t.host}/>
          <Table.Cell content={t.quantity}/>
          <Table.Cell>
            ${t.price}
          </Table.Cell>
          <Table.Cell>${t.quantity * t.price}</Table.Cell>  
          <Table.Cell width={1}>
            <StyledButton icon onClick={() => this.del_tickets(t.id)}>
              <Icon name="times"/>
            </StyledButton>
          </Table.Cell>
        </Table.Row>
      ))
    )
  }

  del_tickets (id) {
    axios.delete(`/api/r_tickets/${id}`)
    .then( res => {
      const {tickets} = this.state;
      this.setState({ tickets: tickets.filter(t => t.id !== id )})
    })  }

  checkout () {
    const { total, isOpen } = this.state;
    return (
      <Modal open = {isOpen}>
          <Modal.Header>
            <StyledButton icon onClick={() => this.setState({ isOpen: !this.state.isOpen })} >
              <Icon name="times"/>
            </StyledButton>
            <StyledHeader black fSize="large" underlined textAlign = 'center'>Checkout</StyledHeader>
          </Modal.Header>
          <Modal.Content>
            <Segment basic textAlign='center'>
              <Label color='green'>Payment Amount</Label>
              <Input value={total} disabled style={{ fontSize: '18px', }} />
              <Divider />
              <BraintreeDrop amount={total} />
            </Segment>
          </Modal.Content>
        </Modal>
    )
  }

  render () {

    return(
      <StyledSegment basic>
        {this.checkout()}
        <Segment textAlign="center" inverted basic>
          <StyledHeader fontSize='large'>Shopping Cart
          <StyledButton>
            <Icon name="shopping cart" />
            Continue Shopping
          </StyledButton>
          </StyledHeader>
        </Segment>
        <h1>Tickets</h1>
        <Divider/>
        <Container>
        <Table basic="very" inverted collapsing celled>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1} content="Date">
                <Header inverted>Date</Header>
              </Table.HeaderCell>
              <Table.HeaderCell width={2} content="Event">
                <Header inverted>Event</Header>
              </Table.HeaderCell>
              <Table.HeaderCell width={1} content="QTY.">
                <Header inverted>QTY.</Header>
              </Table.HeaderCell>
              <Table.HeaderCell width={1} content="Price">
                <Header inverted>Price</Header>
              </Table.HeaderCell>
              <Table.HeaderCell width={1} content="Amount">
                <Header inverted>Amount</Header>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.rendertickets()}
          </Table.Body>
        </Table>
        <Grid columns={6} divided="inverted">
          <Grid.Row > 
            <Grid.Column textAlign="center">
              <h4>Subtotal:</h4>
              <h4>${this.state.subtotal}</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Surcharge:</h4>
              <h4>${this.state.surcharge}</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Inc. Ent. Tax:</h4>
              <h4>${this.state.IETax}</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Sales Tax:</h4>
              <h4>${this.state.salesTax}</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Venue Fee:</h4>
              <h4>${this.state.venueFee}</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h3>Total:</h3>
              <h3>${this.state.total}</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <StyledButton fluid onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          <Icon inverted name="check"/> Checkout
        </StyledButton>
        </Container>
      </StyledSegment>
    )
  }
};

export class ConnectedCart extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Cart {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default ConnectedCart;