import React from 'react';
import { Grid, Header, Icon, } from 'semantic-ui-react';
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
        <Grid style={{ background: '#000000' }}>
          <Grid.Column width={3}>
            <Grid.Row>
              <Header inverted style={{ fontSize: '80%', display: "flex", justifyContent: "center", paddingTop: '30px' }} textAlign="center">Lounge<Icon name='star' size='mini' />Events<Icon name='star' size='mini' />Patio</Header>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row>
              <Header inverted>
              <Header.Content style={{ fontSize: '75%', display: "flex", justifyContent: "center", paddingTop: "15px" }} textAlign="center"><Icon size='large' name='copyright outline' />{venue.venue_name}</Header.Content>
              <Header.Subheader style={{ color: "white", fontSize: '75%', display: "flex", justifyContent: "center", fontWeight: "Bold"}} textAlign="center">All Rights Reserved</Header.Subheader>
              </Header>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={7}>
            <Grid.Row>
              <Header inverted style={{ fontSize: '115%', display: "flex", justifyContent: "center", paddingTop: '25px' }} textAlign="center">{venue.telephone} - {venue.street_address} {venue.city} {venue.state} {venue.zip_code}, USA</Header>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row style={{ paddingTop: '20px'}}>
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