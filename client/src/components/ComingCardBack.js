import React from 'react'
import { StyledImage, } from '../styles/Styles'
import { Segment, Label, } from 'semantic-ui-react';

class ComingCardBack extends React.Component {
  render() {
    const {event, date, time} = this.props;
    return(
      <Segment basic>
        <StyledImage small key={event.id} src={event.image_url} href={`/event/${event.id}`} />
        <Label attached='bottom' color='blue' size="big">
        {event.host}
        <br />
        {date}{' '}{time}
        </Label>
      </Segment>
    )
  }
}

export default ComingCardBack;