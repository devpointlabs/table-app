import React from 'react';
import { Grid } from 'semantic-ui-react';
import { StyledSegment, StyledHeader2, StyledDivider, StyledComingImage, } from '../styles/generalitems';
// Delete these when Database is working
import Audien from '../images/Artists/Audien.jpg';
import Cesqeaux from '../images/Artists/Cesqeaux.jpg';
import DirtyDave from '../images/Artists/DirtyDave.jpg';
import DJ_Que from '../images/Artists/DJ Que.jpg';
import DJ_Jazzy from '../images/Artists/DJ_Jazzy_Jeff.jpg';
import Fashen from '../images/Artists/Fashen.jpg';
import Jason_Ross from '../images/Artists/Jason_Ross.jpg';
import Jaycee from '../images/Artists/Jaycee.jpg';
import Kid_Conrad from '../images/Artists/Kid_Conrad.jpg';
import Method_Man from '../images/Artists/Method_Man_Redman.jpg';
import Spencer from '../images/Artists/Spencer Brown.jpg';
import Subtronics from '../images/Artists/Subtronics.jpg';
import Tritonal from '../images/Artists/Tritonal.jpg';
import Valentino from '../images/Artists/Valentino_Khan.jpg';

class ComingArtists extends React.Component {

  state = { events: [
    {id: 1, host: "Audien", image_url: `${Audien}`, },
    {id: 2, host: "Cesqeaux", image_url: `${Cesqeaux}`, },
    {id: 3, host: "DirtyDave", image_url: `${DirtyDave}`, },
    {id: 4, host: "DJ_Que", image_url: `${DJ_Que}`, },
    {id: 5, host: "DJ_Jazzy", image_url: `${DJ_Jazzy}`, },
    {id: 6, host: "Fashen", image_url: `${Fashen}`, },
    {id: 7, host: "Jason_Ross", image_url: `${Jason_Ross}`, },
    {id: 8, host: "Jaycee", image_url: `${Jaycee}`, },
    {id: 9, host: "Kid_Conrad", image_url: `${Kid_Conrad}`, },
    {id: 10, host: "Method_Man", image_url: `${Method_Man}`, },
    {id: 11, host: "Spencer", image_url: `${Spencer}`, },
    {id: 12, host: "Subtronics", image_url: `${Subtronics}`, },
    {id: 13, host: "Tritonal", image_url: `${Tritonal}`, },
    {id: 14, host: "Valentino", image_url: `${Valentino}`, },

  ]
  };

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