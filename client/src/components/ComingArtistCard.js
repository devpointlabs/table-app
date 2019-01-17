import React from 'react'
import { format } from 'date-fns'
import { StyledComingImage } from '../styles/generalitems';
import { Popup } from 'semantic-ui-react';

class ComingArtistCard extends React.Component {
  state = {date: [], time: [], };

  componentDidMount() {
    var result = format(
      new Date(this.props.event.event_date),
      'dddd MMMM Do YYYY'
      )
    this.setState({ date: result, }, () => this.timeFormat()
      )
  }

  timeFormat = () => {
    var tresult = format(
      new Date(this.props.event.event_time),
      'h:mm A'
    )
    this.setState({ time: tresult, })
  }

  render(){
    const { event } = this.props;
    const { date, time } = this.state
    return(
      <Popup 
      trigger={<StyledComingImage key={event.id} src={event.image_url} href={`/event/${event.id}`} />}
      on='hover'
      header={event.host}
      content={this.state}
      inverted
      />
    )
  }
}

export default ComingArtistCard;