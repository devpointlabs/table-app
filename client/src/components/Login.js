import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, Modal, Icon} from 'semantic-ui-react';
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
            <Header as = 'h2' textAlign = 'center'>LOGIN</Header>
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

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}