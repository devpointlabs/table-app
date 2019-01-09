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
        <Link to = ''>Admin</Link>
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
          <Link to = '/login' class = 'navLink'>LOGIN</Link>
          </Menu.Item>
          <Menu.Item link>
          <Link to = '/register' class = 'navLink'>REGISTER</Link>
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
            <Link to = '/' class = 'navLink'>WORK</Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to = '/' class = 'navLink'>PAGES</Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to = '/' class = 'navLink'>HOME</Link>
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