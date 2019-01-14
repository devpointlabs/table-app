import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, Link, } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react';
import { StyledMenu, StyledItem, StyledLink, StyledDrop } from '../styles/navbarstyle';

import '../App.css'

class Navbar extends React.Component {

  admin= () => {
    const {user} = this.props.auth
    if (user.admin) {
      return(
      <Dropdown.Item>
        <Link to = '/admin-dashboard'>ADMIN DASHBOARD</Link>
      </Dropdown.Item>
      )
    }
  }

  NavItems = () => {
    const { user, handleLogout, } = this.props.auth;

    if (user) {
      return (
      <StyledDrop item text={user.email}>
        <Dropdown.Menu style = {{zIndex: '10'}}>
          <Dropdown.Item>
            <StyledLink black to = '/profile'>PROFILE</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink black to = '/userdash'>DASHBOARD</StyledLink>
          </Dropdown.Item>
            {this.admin()}
          <Dropdown.Item>
            <StyledLink black to = '' onClick = {() => handleLogout(this.props.history)}>LOGOUT</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink black to = '/'>HOME</StyledLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </StyledDrop>
      )
    } else {
      return (
        <>
          <StyledItem link>
            <StyledLink to = '/login' className = ''>LOGIN</StyledLink>
          </StyledItem>
          <StyledItem link>
            <StyledLink to = '/register' className = ''>REGISTER</StyledLink>
          </StyledItem>
        </>
      )
    }
  }

  render() {
    return (
      <StyledMenu borderless position>
        <Menu.Menu position="right">
          <StyledItem StyledLink>
            <StyledLink to = '/' className = ''>PRIVATE EVENTS</StyledLink>
          </StyledItem>
          <StyledItem StyledLink>
            <StyledLink to = '/' className = ''>VIP TABLES</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to = '/ticketing' className = ''>TICKETS</StyledLink>
          </StyledItem>
        { this.NavItems() }
        </Menu.Menu>
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