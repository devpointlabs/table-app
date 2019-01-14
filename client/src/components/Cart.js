import React from 'react';
import { Table, Grid, Divider, Button, Icon, Segment, Header, Container } from 'semantic-ui-react';

class Cart extends React.Component {

  state = { tickets : [
    {date: "Jan 1" , tEvent: "NSP Rock Hard Tour" , quantity: 2 , price: 30 , },
    {date: "Jan 1" , tEvent: "NSP Rock Hard Tour" , quantity: 2 , price: 30 , },
    {date: "Jan 1" , tEvent: "NSP Rock Hard Tour" , quantity: 2 , price: 30 , },
    {date: "Jan 1" , tEvent: "NSP Rock Hard Tour" , quantity: 2 , price: 30 , },


  ] }


  rendertickets () {
    const { tickets } = this.state
    return(
    tickets.map( t => (
        <Table.Row>
          <Table.Cell content={t.date}/>
          <Table.Cell content={t.tEvent}/>
          <Table.Cell content={t.quantity}/>
          <Table.Cell content={t.price}/>
          <Table.Cell>${t.quantity * t.price}</Table.Cell>  
          <Table.Cell>
            <Button inverted basic icon>
              <Icon name="times"/>
            </Button>
          </Table.Cell>
        </Table.Row>
      ))
    )
  }

  render () {
    let subtotal = 0
    this.state.tickets.map( t => {
      const { quantity, price } = t
      subtotal = subtotal + (quantity * price)
    })

    return(
      <>
        <Segment inverted basic>
          <Button inverted color="yellow">
            <Icon name="shopping cart" />
            Continue Shopping
          </Button>
          <Header floated="left" as="h1">Shopping Cart</Header>
        </Segment>
        <h1>Tickets</h1>
        <Divider/>
        <Container>
        <Table inverted celled>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.Cell width={1} content="Date" />
              <Table.Cell width={4} content="Event" />
              <Table.Cell width={2} content="QTY." />
              <Table.Cell width={2} content="Price" />
              <Table.Cell width={2} content="Amount" />
              {/* <Table.Cell width={1}/> */}
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
              <h4>$0.00</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Surcharge:</h4>
              <h4>$0.00</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Inc. Ent. Tax:</h4>
              <h4>$0.00</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Sales Tax:</h4>
              <h4>$0.00</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h4>Venue Fee:</h4>
              <h4>$0.00</h4>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h3>Total:</h3>
              <h3>$0.00</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button fluid inverted color="yellow">
          <Icon inverted name="check"/> Checkout
        </Button>
        </Container>
      </>
    )
  }
};

export default Cart;