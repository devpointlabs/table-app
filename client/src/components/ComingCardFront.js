import React from 'react'
import { StyledComingImage } from '../styles/generalitems';
import { Segment } from 'semantic-ui-react';

class ComingCardFront extends React.Component {
  render() {
    const {event} = this.props;
    return(
      <Segment basic>
        <StyledComingImage key={event.id} src={event.image_url} href={`/event/${event.id}`} />
      </Segment>
    )
  }
}

export default ComingCardFront