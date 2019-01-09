import React, { Fragment } from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import '../App.css'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Link to = '' class = 'navLink' onClick = {() => handleLogout(this.props.history)}>LOGOUT</Link>
      )
    } else {
      return (
        <Fragment>
          <Link to = '/login' class = 'navLink'>LOGIN</Link>
          <Link to = '/register' class = 'navLink'>REGISTER</Link>
        </Fragment>
      )
    }
  }

  render() {
    return (
      <div class = 'navBar'>      
        <Link to = '/' class = 'navLink'>WORK</Link>
        <Link to = '/' class = 'navLink'>PAGES</Link>
        <Link to = '/' class = 'active navLink'>HOME</Link>
      </div>
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