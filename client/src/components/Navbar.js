import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react';
import { StyledMenu, StyledItem, StyledDrop, StyledImg } from '../styles/navbarstyle';
import Sky_SLC from '../images/Logo_Floorplan/Sky_SLC.png';
import '../App.css'
class Navbar extends React.Component {
  
  admin= () => {
    const {user} = this.props.auth
    if (user.admin) {
      return(
      <Dropdown.Item href="/admin-dashboar">
        ADMIN DASHBOARD
      </Dropdown.Item>
      )
    }
  }

  NavItems = () => {
    const { user, handleLogout, } = this.props.auth;
    
    if (user) {
      return (
      <StyledDrop item text={user.email}>
        <Dropdown.Menu>
          <Dropdown.Item href="/profile">
            PROFILE
          </Dropdown.Item>
          <Dropdown.Item href="/">
            DASHBOARD
          </Dropdown.Item>
            {this.admin()}
          <Dropdown.Item onClick = {() => handleLogout(this.props.history)}>
           LOGOUT
          </Dropdown.Item>
          <Dropdown.Item href="">
            HOME
          </Dropdown.Item>
        </Dropdown.Menu>
      </StyledDrop>
      )
    } else {
      return (
        <>
          <StyledItem href="/login">
            LOGIN
          </StyledItem>
          <StyledItem href="/register">
            REGISTER
          </StyledItem>
        </>
      )
    }
  }

  render() {
    return (
      <StyledMenu stackable borderless >
        <StyledImg src={Sky_SLC}/>
        <Menu.Menu position="right">
          <StyledItem href="/">
            PRIVATE EVENTS
          </StyledItem>
          <StyledItem href="/">
            VIP TABLES
          </StyledItem>
          <StyledItem href="/ticketing">
            TICKETS
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