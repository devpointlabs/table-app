import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, Modal } from 'semantic-ui-react';
import Home from './Home';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', isOpen: true};

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
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

  render() {
    const { email, password, passwordConfirmation, isOpen, } = this.state;

    return (
      <div>
        <Modal open = {isOpen}>
          <Modal.Header>
            <Header as = 'h2' textAlign = 'center'>REGISTER</Header>
          </Modal.Header>
          <Modal.Content>
            <Segment basic>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  label="Email"
                  required
                  autoFocus
                  name='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
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
                  <Button primary type='submit'>Submit</Button>
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

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}