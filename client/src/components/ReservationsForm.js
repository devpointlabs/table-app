import React from 'react';
import { Form } from 'semantic-ui-react'
import { StyledButton, } from '../styles/Styles'
import axios from 'axios';

class ReservationsForm extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    date: '',
    size: '',
    notes: '',
  };

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
    
  }
  
  handleSubmit = (e) => {
    const rsvp = this.state;
    e.preventDefault();
    axios.post(`/api/rsvps`, rsvp)
      .then( res => {
        this.props.history.go(`/`)
      })
  }

  render() {
    const { name, email, phone, date, size, notes, } = this.state;
    return(
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <label>Name</label>
            <Form.Input
              name='name'
              placeholder='John Doe'
              required
              value={name}
              onChange={this.handleChange}
            />
            <label>Email</label>
            <Form.Input
              name='email'
              placeholder='johndoe@email.com'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <label>Phone #</label>
            <Form.Input 
              name='phone'
              placeholder='888-888-8888'
              required
              value={phone}
              onChange={this.handleChange}
            />
            <label>Date</label>
            <Form.Input 
              name='date'
              required
              type='date'
              value={date}
              onChange={this.handleChange}
            />
            <label>Group Size</label>
            <Form.Input 
              name='size'
              required
              value={size}
              onChange={this.handleChange}
            />
          </Form.Group>
          <label>Notes</label>
          <Form.TextArea
            name='notes'
            value={notes}
            onChange={this.handleChange}
          />
          <StyledButton large>Submit</StyledButton>
        </Form>
    )
  }
}

export default ReservationsForm;