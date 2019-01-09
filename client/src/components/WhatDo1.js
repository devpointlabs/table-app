import React, {Fragment} from 'react';
// import { Link, } from 'react-router-dom';
import { Header, Segment, Image, Divider, Grid} from 'semantic-ui-react';

const WhatDo = () => (
  <Fragment>
    <Header as="h3" textAlign="center">
      What We Do
    </Header>
    <Divider/>
    <Grid stackable textAlign="center" columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Segment placeholder basic>
            <Image centered circular size="small" src="https://i.imgur.com/r3O9xjLb.jpg" />
            <Header>
              Bottle Service
            </Header>
              <br/>
            Wondering What's going on this weekend? SkySLC has a host of artists coming to Salt Lake City
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment placeholder basic>
              <Image centered size="small" circular src="https://i.imgur.com/C37kKeDb.jpg" />
              <Header>
                Tickets  Guestlist
              </Header>
                <br/>
              Wondering What's going on this weekend? SkySLC has a host of artists coming to Salt Lake City
            </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment placeholder basic>
              <Image centered size="small" circular src="https://i.imgur.com/NJvOWVdb.jpg" />
              <Header>
                Online Table Reservations
              </Header>
                <br/>
              Wondering What's going on this weekend? SkySLC has a host of artists coming to Salt Lake City
            </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Fragment>
)

export default WhatDo;