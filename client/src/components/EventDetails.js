import React from 'react';
import { Grid, Container, Image, Modal, Button } from 'semantic-ui-react';
import EventForm from './EventForm';
import { StyledImage, StyledButton, StyledHeader } from '../styles/Styles'
import axios from 'axios';
import { format } from 'date-fns'
import { AuthConsumer } from '../providers/AuthProvider';
import FloorPlan from '../images/Logo_Floorplan/Sky_SLC_Floor_Plan.png'
 
class EventDetails extends React.Component {
  state = { event: [], editing: false, time: [], date: [], isOpen: false, tableOpen: false, };

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ event: res.data, }, () => this.dateFormat())
      })
  }

  handleOpen = () => {
    const {isOpen} = this.state;
    this.setState({ isOpen: !isOpen});
  }

  tableOpen = () => {
    const {tableOpen} = this.state;
    this.setState({ tableOpen: !tableOpen});
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

  expiredButton = () => (
    <StyledButton onClick={() => this.expiredEvent()}>Remove Expired Events</StyledButton>
  )

    expiredEvent = (id) => {
      const remove = window.confirm("Are you sure you would like to remove all expired events")
      if (remove)
        axios.delete(`/api/expired`)
          .then( res => {
            this.props.history.push('/')
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
    const { event, date, time, isOpen, tableOpen } = this.state;
    return (
      <div>
      <Modal open={isOpen} centered>
        <Modal.Header>
          <StyledHeader textAlign='center' black fSize='large'>Dress Code</StyledHeader>
        </Modal.Header>
        <Modal.Content>
            <StyledHeader black>{event.dress_code}</StyledHeader>
          <StyledButton onClick={() => this.handleOpen()}>Close</StyledButton>
        </Modal.Content>
      </Modal>
      <Modal open={tableOpen} centered>
        <Modal.Header>
          <StyledHeader black textAlign='center' fSize='large'>VIP Table Layout</StyledHeader>
        </Modal.Header>
        <Modal.Content>
          <Image src={FloorPlan} style={{margin: 'auto'}} />
          <StyledButton onClick={() => this.tableOpen()}>Close</StyledButton>
        </Modal.Content>
      </Modal>
      <Grid style={{ marginTop: '150px', }}>
        <Grid.Column width={6}>
          <StyledImage size="large" rounded centered src={event.image_url} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Container style={{paddingTop: '150px'}}>
          <Button.Group>
            {user && user.admin ? this.editButton() : null }
            {user && user.admin ? this.deleteButton() : null }
            {user && user.admin ? this.expiredButton() : null }
          </Button.Group>
            <StyledHeader fSize='large' underlined>{event.host}</StyledHeader>
            <StyledHeader>{date}</StyledHeader>
            <StyledHeader>{time}</StyledHeader>
            <StyledHeader fSize='small'>{event.description}</StyledHeader>
              <StyledButton onClick={() => this.handleOpen()}>Dress Code</StyledButton>
              <StyledButton onClick={() => this.tableOpen()}>VIP Tables</StyledButton>
              <StyledButton onClick={() => this.props.history.push(`/ticketing/${event.id}`)}>Tickets</StyledButton>
          </Container>
        </Grid.Column>
      </Grid>
    </div>
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