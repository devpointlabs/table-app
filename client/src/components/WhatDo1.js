import React from 'react';
// import { Link, } from 'react-router-dom';
import {Segment, Image, Divider, Grid} from 'semantic-ui-react';

const WhatDo = () => (
  <>
    <h1>
      What We Do
    </h1>
    <Divider/>
    <Grid stackable textAlign="center" columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Segment placeholder basic>
            <Image centered circular size="small" src="https://i.imgur.com/r3O9xjLb.jpg" />
            <h2>
              Bottle Service
            </h2>
              <br/>
            Wondering What's going on this weekend? SkySLC has a host of artists coming to Salt Lake City
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment placeholder basic>
              <Image centered size="small" circular src="https://i.imgur.com/C37kKeDb.jpg" />
              <h2>
                Tickets  Guestlist
              </h2>
                <br/>
              Wondering What's going on this weekend? SkySLC has a host of artists coming to Salt Lake City
            </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment placeholder basic>
              <Image centered size="small" circular src="https://i.imgur.com/NJvOWVdb.jpg" />
              <h2>
                Online Table Reservations
              </h2>
                <br/>
              Wondering What's going on this weekend? SkySLC has a host of artists coming to Salt Lake City
            </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
)

export default WhatDo;