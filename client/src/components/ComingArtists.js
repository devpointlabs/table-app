import React from 'react';
import { Grid, } from 'semantic-ui-react';
import { StyledSegment, StyledHeader2, StyledDivider, } from '../styles/generalitems';
import axios from 'axios';
import ComingArtistCard from './ComingArtistCard';

class ComingArtists extends React.Component {

  state = { events: [],  };

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
            <ComingArtistCard event={event} />
          </Grid.Column>
          )}
          </Grid>
      </StyledSegment>
    )
  }
}
export default ComingArtists;