import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react';

import '../App.css'

class Navbar extends React.Component {

  admin= () => {
    const {user} = this.props.auth
    if (user.admin) {
      return(
      <Dropdown.Item>
        <Link to = ''>ADMIN</Link>
      </Dropdown.Item>
      )
    }
  }

  leftNavItems = () => {
    const { user, handleLogout, } = this.props.auth;

    if (user) {
      return (
          <Dropdown item text={user.email}>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to = '/profile' >PROFILE</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to = ''>DASHBOARD</Link>
              </Dropdown.Item>
                {this.admin()}
              <Dropdown.Item>
                <Link to = '' onClick = {() => handleLogout(this.props.history)}>LOGOUT</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      )
    } else {
      return (
        <>
          <Menu.Item link>
            <Link to = '/login' className = ''>LOGIN</Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to = '/register' className = ''>REGISTER</Link>
          </Menu.Item>
        </>
      )
    }
  }

  render() {
    return (
      <Menu borderless >
        { this.leftNavItems() }
        <Menu.Menu position="right">
          <Menu.Item link>
            <Link to = '/' className = ''>PRIVATE EVENTS</Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to = '/' className = ''>VIP TABLES</Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to = '/ticketing' className = ''>TICKETS</Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to = '/ticketing' class = ''>TICKETING</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
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