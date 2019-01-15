import React from 'react';
import axios from 'axios'
import { Form, Header, Container, } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';

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

  onDrop = (files) => {
    this.setState({ ...this.state, image_url: files[0], });
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
    if (this.props.id) {
      axios.put(`/api/events/${this.props.id}`, data)
        .then( res => this.props.history.push(`/events/${res.data.id}`))
    } else {
      axios.post(`/api/events`, data)
        .then( res => this.props.history.push(`/events/${res.data.id}`))
    }
  }

  render(){
    const { host, event_date, dress_code, description, event_time, } = this.state;
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
          <Form.Input
            name="dress_code"
            label="Dress Code"
            placeholder="Dress Code"
            required
            value={dress_code}
            onChange={this.handleChange}
          />
          <Form.Input
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

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
    padding: "10px"
  }
}

export default EventForm;