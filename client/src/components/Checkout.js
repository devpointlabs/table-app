import React, { Component, } from 'react';
import { Header, Segment, Input, Label, Divider, Modal, } from 'semantic-ui-react';
import BriantreeDrop from './BraintreeDrop';

class Checkout extends Component {
  state = {
    isOpen: true,
   };

  render() {
    const { amount, isOpen } = this.state;

    return (
      <Modal open = {isOpen}>
        <Modal.Header>
          <Header as = 'h2' textAlign = 'center'>Checkout</Header>
        </Modal.Header>
        <Modal.Content>
          <Segment basic textAlign='center'>
            <Header as='h1' textAlign='center'>React Payments</Header>
            <Label color='green'>Payment Amount</Label>
            <Input value={amount} disabled style={{ fontSize: '18px', }} />
            <Divider />
            <BriantreeDrop amount={amount} />
          </Segment>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Checkout;