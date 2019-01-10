import React from 'react';
import axios from 'axios'
import { Form, Header, Container, TextArea, } from 'semantic-ui-react'

class EventForm extends React.Component {
  initialState = {
    host: '',
    image_url: '',
    event_date: '',
    event_time: '',
    dress_code: "Must be 21+ to attend. We spend good money on world-class entertainment so we can all have a great time. Please act and dress like a grown up or we won't let you sit with us.",
    description: '',
  };

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    const events = this.state;
    e.preventDefault();
    if (this.props.id) {
      axios.put(`/api/events/${this.props.id}`, events)
        .then( res => this.props.history.push(`/events/${res.data.id}`))
    } else {
      axios.post(`/api/events`, events)
        .then( res => this.props.history.push(`/events/${res.data.id}`))
    }
  }

  render(){
    const { host, image_url, event_date, dress_code, description, event_time, } = this.state;
    return(
      <Container>
        <Header as='h1' textAlign="center">
        { (this.props.id) ? "Edit Event" : "New Event" }
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="host"
            label="Host Artist"
            placeholder="Host"
            required
            autofocus
            value={host}
            onChange={this.handleChange}
          />
          <Form.Group widths="equal">
            <Form.Input
              name="event_date"
              label="Date"
              placeholder="Pretend this is a Date Picker"
              required
              type="date"
              value={event_date}
              onChange={this.handleChange}
              />
            <Form.Input
              name="event_time"
              label="Time"
              placeholder="Pretend this is a Time Picker"
              required
              type="time"
              value={event_time}
              onChange={this.handleChange}
              />
          </Form.Group>
          <Form.Input
            name="image_url"
            label="Image Upload"
            placeholder="Pretend this is an Image Uploader"
            required
            value={image_url}
            onChange={this.handleChange}
          />
          <Form.Input
            name="dress_code"
            label="Dress Code"
            placeholder="Dress Code"
            required
            value={dress_code}
            onChange={this.handleChange}
          />
          <Form.Input
            as={TextArea}
            name="description"
            label="Description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Form.Button color="green">
          Submit
          </Form.Button>
        </Form>
      </Container>
    )
  }

}

export default EventForm;