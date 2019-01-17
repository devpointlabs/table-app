import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Segment, Header, Modal, Button, Select } from 'semantic-ui-react';
import { StyledButton } from '../styles/generalitems';
import Home from './Home';
import DatePicker from 'react-date-picker'

class Register extends React.Component {
  state = { 
    email: '', 
    password: '', 
    passwordConfirmation: '', 
    first_name: '', 
    last_name: '', 
    gender: '',
    city: '',
    date_of_birth: new Date(),
    isOpen: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, first_name, last_name, gender, city, date_of_birth} = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, first_name, last_name, gender, city, date_of_birth}, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleOpen = () => {
    const {isOpen} = this.state;
    this.setState({ isOpen: !isOpen });
  }

  onChange = date_of_birth => this.setState({ date_of_birth })

  render() {
    const { email, password, passwordConfirmation, first_name, last_name, gender, city, date_of_birth, isOpen, } = this.state;

    return (
      <div>
        <Modal open = {isOpen}>
          <Modal.Header>
            <Header as = 'h2' textAlign = 'center'>REGISTER</Header>
          </Modal.Header>
          <Modal.Content>
            <Segment basic>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths = {2}>
                  <Form.Input
                    label="First Name"
                    required
                    autoFocus
                    name='first_name'
                    value={first_name}
                    placeholder='John'
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Last Name"
                    required
                    name='last_name'
                    value={last_name}
                    placeholder='Doe'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Input
                  label="Gender"
                  control={Select} 
                  required
                  name='gender'
                  
                  options={options}
                  placeholder='Gender'
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Email"
                  required
                  name='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="City"
                  required
                  name="city"
                  value={city}
                  placeholder='City'
                  onChange={this.handleChange}
                />
                {/* <Form.Input
                  label="Date of Birth"
                  required
                  name='date_of_birth'
                  value={date_of_birth}
                  placeholder='mm/dd/yy'
                  onChange={this.handleChange}
                /> */}
                <Form.Input label='Date of Birth' >
                  <DatePicker
                    
                    name='date_of_birth'
                    value={date_of_birth}
                    onChange = {this.onChange}
                  />
                </Form.Input>
                <Form.Input
                  label="Password"
                  required
                  name='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Password Confirmation"
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  placeholder='Password Confirmation'
                  type='password'
                  onChange={this.handleChange}
                />
                <Segment textAlign='center' basic>
                  <StyledButton type='submit'>Submit</StyledButton>
                  <Button onClick = {this.handleOpen}>Close</Button>
                </Segment>
              </Form>
            </Segment>
          </Modal.Content>
        </Modal>
        <Home />
      </div>
    )
  }
}

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other'},
]

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}