import React from 'react';
import { Grid, } from 'semantic-ui-react';
import { StyledButton, StyledButton2, StyledHeader, StyledComingImage, StyledSegment2 } from '../styles/generalitems';
import { Link, } from 'react-router-dom';
import { format } from 'date-fns';

class CalendarCards extends React.Component {
  state = { date: [], time: [],  }

  componentDidMount() {
    this.dateFormat();
    this.timeFormat();
  }

  dateFormat = () => {
    var result = format(
      new Date(this.props.event_date),
      'dddd MMMM Do YYYY'
    )
    this.setState({ date: result, })
  }

  timeFormat = () => {
    var tresult = format(
      new Date(this.props.event_time),
      'h:mm A'
    )
    this.setState({ time: tresult, })
  }

  render() {
    const { id, host, image_url, } = this.props;
    const { date, time } = this.state;
    return(
      <StyledSegment2 style={{maxWidth: "700px"}} >
        <Grid columns={2} stackable>
          <Grid.Column>
              <StyledComingImage src={image_url} />
          </Grid.Column>
          <Grid.Column width={6} style={{ marginTop: "15%"}}>
              <Grid.Row>
                <StyledHeader>{host}</StyledHeader>
              </Grid.Row>
              <Grid.Row>
                <StyledHeader small>{date}</StyledHeader>
              </Grid.Row>
              <Grid.Row>
                <StyledHeader small>{time}</StyledHeader>
              </Grid.Row>
              <br />
              <Grid.Row>
                <Link to={`/event/${id}`}>
                <StyledButton fluid>Details</StyledButton>
                </Link>
              </Grid.Row>
              <Grid.Row>
                <Link to={`/tickets/${id}`}>
                  <StyledButton2 fluid>Tickets</StyledButton2>
                </Link>
              </Grid.Row>
          </Grid.Column>
        </Grid>
      </StyledSegment2>
    )
  }
}

export default CalendarCards;