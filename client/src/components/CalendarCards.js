import React from 'react';
import { Grid, } from 'semantic-ui-react';
import { StyledButton, StyledHeader, StyledImage, StyledSegment } from '../styles/Styles'
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
      <StyledSegment bordered auto style={{maxWidth: "700px"}} >
        <Grid columns={2} stackable>
          <Grid.Column>
              <StyledImage small src={image_url} />
          </Grid.Column>
          <Grid.Column width={6} style={{ marginTop: "15%"}}>
              <Grid.Row>
                <StyledHeader fSize='large' underlined>{host}</StyledHeader>
              </Grid.Row>
              <Grid.Row>
                <StyledHeader fSize='small'>{date}</StyledHeader>
              </Grid.Row>
              <Grid.Row>
                <StyledHeader fSize='small'>{time}</StyledHeader>
              </Grid.Row>
              <br />
              <Grid.Row>
                <Link to={`/event/${id}`}>
                <StyledButton fluid>Details</StyledButton>
                </Link>
              </Grid.Row>
              <Grid.Row>
                <Link to={`/tickets/${id}`}>
                  <StyledButton filled fluid>Tickets</StyledButton>
                </Link>
              </Grid.Row>
          </Grid.Column>
        </Grid>
      </StyledSegment>
    )
  }
}

export default CalendarCards;