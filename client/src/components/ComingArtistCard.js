import React from 'react'
import { format } from 'date-fns'
import ComingCardFront from './ComingCardFront';
import ComingCardBack from './ComingCardBack';

class ComingArtistCard extends React.Component {
  state = {date: [], time: [], flipped: false };

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

  onHover = () => {
    this.setState({ flipped: true })
  }

  hoverReset = () => {
    this.setState({ flipped: false })
  }

  render(){
    const { event } = this.props;
    const { date, time, flipped } = this.state
    return(
      <div
        onMouseEnter={this.onHover.bind(this)}
        onMouseLeave={this.hoverReset.bind(this)}
        >
        { flipped ? 
          <ComingCardBack event={event} date={date} time={time} />
          :
          <ComingCardFront event={event} />
        }
      </div>
    )
  }
}

export default ComingArtistCard;