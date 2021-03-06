import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Segment, Modal, } from 'semantic-ui-react';
import { StyledButton, StyledHeader } from '../styles/Styles';
import Home from './Home';

const genders = () => {
  return [
    {text: "Male", value: "Male", key: 1},
    {text: "Female", value: "Female", key: 2},
    {text: "Other", value: "Other", key: 3},
  ]
}

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
    if (date_of_birth)
    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, first_name, last_name, gender, city, date_of_birth}, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value, } = e.target;
    this.setState({ [name]: value,});
  }

  genderChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  }

  handleOpen = () => {
    const {isOpen} = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { email, password, passwordConfirmation, first_name, last_name, gender, city, date_of_birth, isOpen, } = this.state;
    return (
      <div>
        <Modal open = {isOpen}>
          <Modal.Header>
            <StyledHeader black fSize='large' textAlign='center'>REGISTER</StyledHeader>
          </Modal.Header>
          <Modal.Content>
            <Segment basic>
            <Segment>
              <StyledHeader textAlign='center' black>Register with Email</StyledHeader>
              <Form onSubmit={this.handleSubmit}>
                  <StyledHeader fSize='small' black>First Name</StyledHeader>
                  <Form.Input
                    required
                    autoFocus
                    name='first_name'
                    value={first_name}
                    placeholder='John'
                    onChange={this.handleChange}
                    />
                  <StyledHeader fSize='small' black>Last Name</StyledHeader>
                  <Form.Input
                    required
                    name='last_name'
                    value={last_name}
                    placeholder='Doe'
                    onChange={this.handleChange}
                    />
                <StyledHeader fSize='small' black>Gender</StyledHeader>
                <Form.Select placeholder='' defaultValue="Other" name="gender" value={gender} onChange={this.genderChange} options={genders()} />
                <StyledHeader fSize='small' black>Email</StyledHeader>
                <Form.Input
                  required
                  name='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                  />
                <StyledHeader fSize='small' black>City</StyledHeader>
                <Form.Input
                  required
                  name="city"
                  value={city}
                  placeholder='City'
                  onChange={this.handleChange}
                  />
                <StyledHeader fSize='small' black>Date of Birth</StyledHeader>
                <Form.Input
                  required
                  name='date_of_birth'
                  value={date_of_birth}
                  placeholder='mm/dd/yy'
                  onChange={this.handleChange}
                  type='date'
                  />
                <StyledHeader fSize='small' black>Password</StyledHeader>
                <Form.Input
                  required
                  name='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                  />
                <StyledHeader fSize='small' black>Password Confirmation</StyledHeader>
                <Form.Input
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  placeholder='Password Confirmation'
                  type='password'
                  onChange={this.handleChange}
                  />
                <Segment textAlign='center' basic>
                  <StyledButton type='submit'>Submit</StyledButton>
                  <StyledButton filled onClick = {this.handleOpen}>Close</StyledButton>
                </Segment>
              </Form>
            </Segment>
            </Segment>
          </Modal.Content>
        </Modal>
        <Home />
      </div>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}