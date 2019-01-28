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
        window.alert('Request submitted to venue')
        this.props.history.go(`/`)
      })
  }

  render() {
    const { name, email, phone, date, size, notes, } = this.state;
    return(
        <Form onSubmit={this.handleSubmit} inverted>
          <Form.Group widths='equal'>
            <Form.Input
              label='Name'
              name='name'
              placeholder='John Doe'
              required
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              label='Email'
              name='email'
              placeholder='johndoe@email.com'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input 
              label='Phone #'
              name='phone'
              placeholder='888-888-8888'
              required
              value={phone}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Date'
              name='date'
              required
              type='date'
              value={date}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Group Size'
              name='size'
              required
              value={size}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="Notes"
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