import React from 'react';
import { Grid, Header, Icon, } from 'semantic-ui-react';
import {StyledHeader} from '../styles/Styles';
import axios from 'axios';

class Footer extends React.Component {
  state = { venue: [], }

  componentDidMount() {
    axios.get(`/api/settings/1`)
    .then( res => {
      this.setState({ venue: res.data, })
    })
  }

  render() {
    const { venue, } = this.state;
    return(
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Grid style={{ background: '#000000' }} stackable>
          <Grid.Column width={3}>
            <Grid.Row>
              <StyledHeader fSize='small' style={{ fontSize: '80%', display: "flex", justifyContent: "center", paddingTop: '35px' }} textAlign="center">Lounge<Icon name='star' size='mini' style={{ paddingLeft: '2px'}}/>Events<Icon name='star' size='mini' style={{ paddingLeft: '2px'}} />Patio</StyledHeader>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row>
              <Header>
                <StyledHeader fSize='small' style={{ fontSize: '75%', display: "flex", justifyContent: "center", paddingTop: "15px" }} textAlign="center"><Icon size='mini' name='copyright outline' />{venue.venue_name}</StyledHeader>
                <StyledHeader fSize='small' style={{ fontSize: '75%', display: "flex", justifyContent: "center", fontWeight: "Bold", marginTop: '-5px'}} textAlign="center">All Rights Reserved</StyledHeader>
              </Header>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={7}>
            <Grid.Row>
              <StyledHeader inverted style={{ fontSize: '115%', display: "flex", justifyContent: "center", paddingTop: '25px' }} textAlign="center">{venue.telephone} - {venue.street_address} {venue.city} {venue.state} {venue.zip_code}, USA</StyledHeader>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row style={{ paddingTop: '20px', display: "flex", justifyContent: 'center' }}>
              <a href={venue.facebook_url} target="_blank" rel="noopener noreferrer">
                <Icon inverted name="facebook official" size='big' />
              </a>
              <a href={venue.twitter_url} target="_blank" rel="noopener noreferrer">
                <Icon inverted name="twitter square" size='big' />
              </a>
              <a href={venue.instagram_url} target="_blank" rel="noopener noreferrer">
                <Icon inverted name="instagram" size='big' />
              </a>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Footer;