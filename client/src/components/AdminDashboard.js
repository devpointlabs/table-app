import React from 'react';
import { StyledButton, StyledHeader } from '../styles/Styles'
import { Icon } from 'semantic-ui-react'
import { Form, Message, Grid, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { StyledSegment } from '../styles/AdminDashboardStyle'
import axios from "axios";


class AdminDashboard extends React.Component {
  state = { email: "", message: "", color: '', admins: [], hide: 'hidden' };

  componentDidMount() {
    axios.get("/api/view_all_admins")
      .then(res => {
        console.log(res.data)
        this.setState({ admins: res.data })
      }).catch(err => {
        console.log(err)
    });
  }

  promoteToAdmin = () => {
    axios.put("/api/promote_to_admin", this.state)
      .then( res => {
        this.setState({
          admin: res.data,
          message: res.data.message,
          color: res.data.color,
          hide: res.data.hide,
        });
      }).catch(err => {
        console.log(err)
    });
  }

  removeAsAdmin = () => {
    axios.put("/api/remove_as_admin", this.state)
      .then( res => {
        this.setState({
          admin: res.data,
          message: res.data.message,
          color: res.data.color,
          hide: res.data.hide,
        });
      }).catch(err => {
        console.log(err)
    });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const {email, message, color, hide, admins } = this.state
    return (
      <StyledSegment basic>
        <Message hidden={hide} color={color}>{ message }</Message>
        <Link to='/event-form'>
          <StyledButton icon>
            <Icon name="plus" /> Add Event
          </StyledButton>
        </Link>
        <Link to='/hero-form'>
          <StyledButton icon>
            <Icon name="plus" /> Add New Hero Image
          </StyledButton>
        </Link>
        <Link to='/hero-management'>
          <StyledButton>
            Manage Hero Images
          </StyledButton>
        </Link>
        <Link to='/venue-form'>
          <StyledButton>
            Edit Venue Details
          </StyledButton>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <Grid columns={2} stackable textAlign='center'>
          <Form>
            <StyledHeader fSize='large'>email</StyledHeader>
            <Form.Input
            name="email"
            placeholder="email@email.com"
            required
            value={email}
            onChange={this.handleChange}
            />
            <StyledButton onClick={this.promoteToAdmin}>
              + Add user as admin
            </StyledButton>
            <StyledButton onClick={this.removeAsAdmin}>
              - Remove as admin
            </StyledButton>
          </Form>
          <List>
            <StyledHeader fSize='large' underlined>Admins</StyledHeader>
            { admins.map( admin => 
            <li>
              <StyledHeader>
                { admin.first_name } { admin.last_name }
              </StyledHeader>
              <StyledHeader fSize='small'>{ admin.email }</StyledHeader>
              <br /><br />
            </li>
            )}
          </List>
        </Grid>
      </StyledSegment>
    )
  }
}

export default AdminDashboard;