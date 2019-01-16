import React from 'react';
import { Grid, Container, } from 'semantic-ui-react';
import { StyledButton, StyledHeader, StyledSubHeader, StyledImage, StyledMainText } from '../styles/generalitems';
import axios from 'axios';
import { format } from 'date-fns'
 
class EventDetails extends React.Component {
  state = { event: [], };

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ event: res.data, }, () => this.dateFormat())
      })
  }

  dateFormat = () => {
    var result = format(
      new Date(this.state.event.event_date),
      'dddd MMMM Do YYYY'
    )
    this.setState({ date: result, }, () => this.timeFormat()
    )
  }

  timeFormat = () => {
    var tresult = format(
      new Date(this.state.event.event_time),
      'h:mm A'
    )
    this.setState({ time: tresult, })
  }



  render() {
    const { event, date, time } = this.state;
    return(
      <Grid style={{ marginTop: '150px', }}>
        <Grid.Column width={6}>
          <StyledImage size="large" rounded centered src={event.image_url} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Container style={{paddingTop: '150px'}}>
            <StyledHeader>{event.host}</StyledHeader>
            <StyledSubHeader>{date}</StyledSubHeader>
            <StyledSubHeader>{time}</StyledSubHeader>
            <StyledMainText as='h3'>{event.description}</StyledMainText>
              <StyledButton>Dress Code</StyledButton>
              <StyledButton>VIP Tables</StyledButton>
              <StyledButton onClick={() => this.props.history.push(`/tickets/${event.id}`)}>Tickets</StyledButton>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
} 

export default EventDetails;