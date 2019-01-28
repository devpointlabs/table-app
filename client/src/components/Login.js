import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Segment, Header, Modal } from 'semantic-ui-react';
import { StyledButton, StyledHeader } from '../styles/Styles';
import Home from './Home';

class Login extends React.Component {
  state = { email: '', password: '', isOpen: true }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleOpen = (e) => {
    e.preventDefault();
    const {isOpen} = this.state;
    this.setState({ isOpen: !isOpen});
  }

  render() {
    const { email, password, isOpen } = this.state;

    return (
      <div>
        <Modal open = {isOpen}>
          <Modal.Header>
            <StyledHeader black fSize='large' textAlign = 'center'>LOGIN</StyledHeader>
          </Modal.Header>
          <Modal.Content>
            <Segment basic>
            <Form onSubmit={this.handleSubmit}>
            <StyledHeader fSize='small' black>Email</StyledHeader>
              <Form.Input
                required
                autoFocus
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
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
              <Segment textAlign='center' basic>
                <StyledButton type='submit'>Submit</StyledButton>
                <StyledButton filled onClick = {this.handleOpen}>Close</StyledButton>
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

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}