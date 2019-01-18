import React from 'react';
import { Grid, } from 'semantic-ui-react';
import { StyledSegment, StyledHeader, Line, } from '../styles/generalitems';
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
        <StyledHeader fSize='large' inverted textAlign="center">What We Do</StyledHeader>
        <Line />
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