import React from 'react'
import { format } from 'date-fns'
import { StyledComingImage } from '../styles/generalitems';
import { Card } from 'semantic-ui-react';

class ComingCardFront extends React.Component {
  render() {
    const {event} = this.props;
    return(
      <Card as={StyledComingImage}>
        <StyledComingImage key={event.id} src={event.image_url} href={`/event/${event.id}`} />
      </Card>
    )
  }
}

export default ComingCardFront