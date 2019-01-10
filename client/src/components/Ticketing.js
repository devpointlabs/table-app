import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Butterfly from './butterfly.jpg';

class Ticketing extends React.Component {


  render () {
    return(
      <Grid celled>
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
              <Grid.Column width={4}>Ticket Type</Grid.Column>
              <Grid.Column width={2}>Price</Grid.Column>
              <Grid.Column width={2}>QTY</Grid.Column>
              <Grid.Column width={2}>Reset QTY</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>Pre-Sale Gen.ADM</Grid.Column>
              <Grid.Column width={2}>$25</Grid.Column>
              <Grid.Column width={2}>Quantity Drop Down</Grid.Column>
              <Grid.Column width={2}>Add to cart button</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>Pre-Sale Tier 2 Gen-ADM</Grid.Column>
              <Grid.Column width={2}>$35</Grid.Column>
              <Grid.Column width={2}>Quantity Drop Down</Grid.Column>
              <Grid.Column width={2}>Add to cart button</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>VIP Bar Card Package wit $50 Bar Card</Grid.Column>
              <Grid.Column width={2}>$60</Grid.Column>
              <Grid.Column width={2}>Quantity Drop Down</Grid.Column>
              <Grid.Column width={2}>Add to cart button</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>Day Of Show General Admission</Grid.Column>
              <Grid.Column width={2}>$40</Grid.Column>
              <Grid.Column width={2}>Quantity Drop Down</Grid.Column>
              <Grid.Column width={2}>Add to cart button</Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
};

export default Ticketing;