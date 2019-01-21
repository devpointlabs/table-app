import React from 'react';
import axios from 'axios'
import { Form, Container, } from 'semantic-ui-react'
import { StyledButton, StyledHeader, StyledImage } from '../styles/Styles'
import Dropzone from 'react-dropzone';
import placeholder from '../images/placeholder.png'

class EventForm extends React.Component {
  initialState = {
    host: '',
    image_url: '',
    event_date: '',
    event_time: '',
    dress_code: "Must be 21+ to attend. We spend good money on world-class entertainment so we can all have a great time. Please act and dress like a grown up or we won't let you sit with us.",
    description: '',
    display: placeholder,
  };

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.event && this.props.event.id)
      this.setState({ 
        host: this.props.event.host,
        image_url: [],
        event_date: this.props.date,
        event_time: this.props.time,
        dress_code: this.props.event.dress_code,
        description: this.props.event.description,
        display: this.props.event.image_url
       });
  }

  onDrop = (files) => {
    const image = URL.createObjectURL(files[0])
    this.setState({ ...this.state, image_url: files[0], display: image, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    let data = new FormData();
    data.append("image_url", this.state.image_url)
    data.append("host", this.state.host)
    data.append("event_date", this.state.event_date)
    data.append("event_time", this.state.event_time)
    data.append("dress_code", this.state.dress_code)
    data.append("description", this.state.description)
    e.preventDefault();
    if (this.props.event && this.props.event.id) {
      axios.put(`/api/events/${this.props.event.id}`, data)
        .then( res => this.props.history.go(`/event/${res.data.id}`))
    } else {
      axios.post(`/api/events`, data)
        .then( res => this.props.history.push(`/event/${res.data.id}`))
    }
  }

  render(){
    const { host, event_date, dress_code, description, event_time, display } = this.state;
    return(
      <Container style={{paddingTop: '100px' }}>
        <StyledHeader fSize='large' underlined textAlign="center">
        { (this.props.id) ? "Edit Event" : "New Event" }
        </StyledHeader>
        <StyledImage centered src={display} />
        <Form onSubmit={this.handleSubmit}>
        <label>Host Artist</label>
          <Form.Input
            name="host"
            placeholder="Host"
            required
            autofocus
            value={host}
            onChange={this.handleChange}
          />
          <Form.Group widths="equal">
            <label>Date</label>
            <Form.Input
              name="event_date"
              placeholder="Pretend this is a Date Picker"
              required
              type="date"
              value={event_date}
              onChange={this.handleChange}
              />
            <label>Time</label>
            <Form.Input
              name="event_time"
              placeholder="Pretend this is a Time Picker"
              required
              type="time"
              value={event_time}
              onChange={this.handleChange}
              />
          </Form.Group>
          <Dropzone
          onDrop={this.onDrop}
          multiple={false}
          >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> 
                  :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
          </Dropzone>
          <label>Dress Code</label>
          <Form.TextArea
            name="dress_code"
            placeholder="Dress Code"
            required
            value={dress_code}
            onChange={this.handleChange}
          />
          <label>Description</label>
          <Form.TextArea
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <StyledButton>
          Submit
          </StyledButton>
        </Form>
      </Container>
    )
  }

}

const styles = {
  dropzone: {
    height: "150px",
    width: "100%",
    border: "1px dotted white",
    borderRadius: "5x",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
  }
}

export default EventForm;