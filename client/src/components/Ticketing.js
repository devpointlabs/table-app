import React from 'react';
import { Grid, Image, Form, Button, Input, Select } from 'semantic-ui-react';
import Butterfly from './butterfly.jpg';


const gen = (v) => {
  return [...Array(v+1).keys()].map( a => ({value: a, text: a, key: a}) )
}

class Ticketing extends React.Component {


  render () {
    return(
      <Grid stackable celled>
        <Grid.Column width={6}>
          <Image size="medium" centered src={Butterfly} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid celled="internally">
            <Grid.Row>
              datetime
            </Grid.Row>
            <Grid.Row>
              titlename
            </Grid.Row>          
            <Grid.Row>
              <Grid.Column mobile={4} computer={4}>Ticket Type</Grid.Column>
              <Grid.Column mobile={4} computer={2}>Price</Grid.Column>
              <Grid.Column mobile={4} computer={2}>QTY</Grid.Column>
              <Grid.Column mobile={4} computer={2}>Reset QTY</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={4} computer={4}>Pre-Sale Gen.ADM</Grid.Column>
              <Grid.Column mobile={4} computer={2}>$25</Grid.Column>
              <Grid.Column mobile={4} computer={2}><Select fluid placeholder='0' options={gen(300)} /></Grid.Column>
              <Grid.Column mobile={4} computer={2}>Add to cart button</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={4} computer={4}>Pre-Sale Tier 2 Gen-ADM</Grid.Column>
              <Grid.Column mobile={4} computer={2}>$35</Grid.Column>
              <Grid.Column mobile={4} computer={2}><Select fluid placeholder='0' options={gen(150)} /></Grid.Column>
              <Grid.Column mobile={4} computer={2}>Add to cart button</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={4} computer={4}>VIP Bar Card Package wit $50 Bar Card</Grid.Column>
              <Grid.Column mobile={4} computer={2}>$60</Grid.Column>
              <Grid.Column mobile={4} computer={2}><Select fluid placeholder='0' options={gen(25)} /></Grid.Column>
              <Grid.Column mobile={4} computer={2}>Add to cart button</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={4} computer={4}>Day Of Show General Admission</Grid.Column>
              <Grid.Column mobile={4} computer={2}>$40</Grid.Column>
              <Grid.Column mobile={4} computer={2}><Select fluid placeholder='0' options={gen(200)} /></Grid.Column>
              <Grid.Column mobile={4} computer={2}>Add to cart button</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Form>
                  <Form.Group width="equal">
                  <Form.Field inline>
                    <label>Promo Code:</label>
                    <Input />
                  </Form.Field>
                  <Button inline>Unlock Tickets</Button>
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
};

export default Ticketing;