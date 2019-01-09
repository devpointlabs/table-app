import React, { Fragment } from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import '../App.css'
import { StyledItem, StyledMenu } from '../styles/navBar';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location: { pathname, }, history, } = this.props;
    if (user) {
      return (
        <Menu.Menu position="right">
          <StyledItem 
            name="LOGOUT"
            onClick={() => handleLogout(history)}
            />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <StyledItem
              name="LOGIN"
              id="login"
              active={pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <StyledItem
              name="REGISTER"
              id="register"
              active={pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {  
    return (
      <StyledMenu pointing secondary>
        <Link to="/">
          <StyledItem
            name="HOME"
            id="home"
            active={this.props.location.pathname === "/"}
            />
        </Link>          
        { this.rightNavItems() }
      </StyledMenu>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);