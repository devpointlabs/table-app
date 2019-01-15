import React from 'react';
import { Grid } from 'semantic-ui-react';
import { StyledSegment, StyledHeader2, StyledDivider, StyledComingImage, } from '../styles/generalitems';
import axios from 'axios';

class ComingArtists extends React.Component {

  state = { events: [], };

  componentDidMount() {
    axios.get('/api/comingartists')
      .then( res => {
        this.setState({ events: res.data, })
      })
  }

  render() {
    const { events } = this.state;
    return(
      <StyledSegment textAlign='center' fluid>
        <StyledHeader2 as="h1" inverted textAlign="center">What We Do</StyledHeader2>
        <StyledDivider />
        <Grid columns={4} centered container stackable>
          { events.map( event =>
          <Grid.Column>
            <StyledComingImage key={event.id} src={event.image_url} href={`/events/${event.id}`} />
          </Grid.Column>
          )}
          </Grid>
      </StyledSegment>
    )
  }
}
export default ComingArtists;