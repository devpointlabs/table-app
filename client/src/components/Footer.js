import React from 'react';
import { Image, Grid, Header, Icon, } from 'semantic-ui-react';
import map from './gmaps_head.png';

const Footer = () => (
  <div>
    {/* Replace with actual map photo needed. */}
    <a href='https://www.google.com/maps/place/Sky+SLC/@40.7636865,-111.8979172,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f504fe784bb1:0xf5d34a840d1e4738!8m2!3d40.7636865!4d-111.8957285' target="_blank">
    <Image fluid src={map} />
    </a>
    <Grid style={{ background: '#1f1f1f'}}>
      <Grid.Column width={3}>
        <Grid.Row>
          <Header inverted style={{ fontSize: '80%', display: "flex", justifyContent: "center", paddingTop: '30px' }} textAlign="center">Lounge<Icon name='star' size='mini' />Events<Icon name='star' size='mini' />Patio</Header>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={3}>
        <Grid.Row>
          <Header inverted>
          <Header.Content style={{ fontSize: '75%', display: "flex", justifyContent: "center", paddingTop: "15px" }} textAlign="center"><Icon size='large' name='copyright outline' />SkySLC 2016-2019</Header.Content>
          <Header.Subheader style={{ color: "white", fontSize: '75%', display: "flex", justifyContent: "center", fontWeight: "Bold"}} textAlign="center">All Rights Reserved</Header.Subheader>
          </Header>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={7}>
        <Grid.Row>
          <Header inverted style={{ fontSize: '115%', display: "flex", justifyContent: "center", paddingTop: '25px' }} textAlign="center">801.883.8714 - 149 Pierpoint Ave. Salt Lake City UT 84101, USA</Header>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={3}>
        <Grid.Row style={{ paddingTop: '20px'}}>
          <a href='https://www.facebook.com/skysaltlakecity' target="_blank">
            <Icon inverted name="facebook official" size='big' />
          </a>
          <a href='https://twitter.com/SkyVenueSLC' target="_blank">
            <Icon inverted name="twitter square" size='big' />
          </a>
          <a href='https://www.instagram.com/SKYSLC/' target="_blank">
            <Icon inverted name="instagram" size='big' />
          </a>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </div>
)

export default Footer;