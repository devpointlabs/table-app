import React from 'react';
import { Grid, Container, Button } from 'semantic-ui-react';
import EventForm from './EventForm';
import { StyledButton, StyledHeader, StyledSubHeader, StyledImage, StyledMainText } from '../styles/generalitems';
import axios from 'axios';
import { format } from 'date-fns'
import { AuthConsumer } from '../providers/AuthProvider';
 
class EventDetails extends React.Component {
  state = { event: [], editing: false, time: [], date: [], };

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

  editButton = () => {
    const { editing } = this.state;
    return(
      <StyledButton onClick={() => this.editDate()}>{ editing ? 'Cancel' : 'Edit' }</StyledButton>
    )
  }

  deleteButton = () => (
      <StyledButton onClick={() => this.deleteEvent()}>Delete Event</StyledButton>
  )

  deleteEvent = (id) => {
    const remove = window.confirm("Are you sure you want to delete this event?")
    if (remove)
      axios.delete(`/api/events/${this.state.event.id}`)
        .then( res => {
          this.props.history.push(`/`)
        })
  }
  

  editDate = () => {
    var result = format(
      new Date(this.state.event.event_date),
      'YYYY-MM-DD'
    )
    this.setState({ date: result, }, () => this.editTime()
    )
  }

  editTime = () => {
    var tresult = format(
      new Date(this.state.event.event_time),
      'HH:mm' 
    )
    this.setState({ time: tresult, }, () => this.toggleEdit()
    )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing }
    })
  }


  eventView = () => {
    const { auth: {user, } , } = this.props;
    const { event, date, time } = this.state;
    return (
    <Grid style={{ marginTop: '150px', }}>
      <Grid.Column width={6}>
        <StyledImage size="large" rounded centered src={event.image_url} />
      </Grid.Column>
      <Grid.Column width={8}>
        <Container style={{paddingTop: '150px'}}>
        <Button.Group>
        {user && user.admin ? this.editButton() : null }
        {user && user.admin ? this.deleteButton() : null }
        </Button.Group>
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

  editView = () => (
    <EventForm event={this.state.event} time={this.state.time} date={this.state.date} history={this.props.history} />
  )

  render() {
    const { editing } = this.state;
    return(
      <div>
        {editing ? this.editView() : this.eventView()}
      </div>
    )
  }
} 

const ConnectedEvent = (props) => (
  <AuthConsumer>
    { value =>
      <EventDetails { ...props } auth={value} />
    }
  </AuthConsumer>
)

export default ConnectedEvent;