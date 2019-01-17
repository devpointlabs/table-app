import React from 'react'
import { format } from 'date-fns'
import { StyledComingImage } from '../styles/generalitems';
import { Popup, Card, Label, } from 'semantic-ui-react';

class ComingCardBack extends React.Component {
  render() {
    const {event, date, time} = this.props;
    return(
      <Card as={StyledComingImage} floated>
        <StyledComingImage key={event.id} src={event.image_url} href={`/event/${event.id}`} />
        <Label attached='bottom' color='blue' size="big">
        {event.host}
        <br />
        {date}{' '}{time}
        </Label>
      </Card>
    )
  }
}

export default ComingCardBack;