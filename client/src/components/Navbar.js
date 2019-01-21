import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react';
import { StyledMenu, StyledItem, StyledDrop, StyledImg } from '../styles/navbarstyle';
import Sky_SLC from '../images/Logo_Floorplan/Sky_SLC_White.svg';
import axios from 'axios';
import '../App.css'

class Navbar extends React.Component {
  state = { solid: false, venue: [], };

  componentDidMount() {
    window.addEventListener("scroll", this.resizeNavOnScroll.bind(this));
    axios.get(`/api/settings/1`)
      .then( res => {
        this.setState({ venue: res.data, })
      })
  }

  resizeNavOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 400,
      navMenu = document.getElementById("navMenu"),
      skyImg = document.getElementById("skyImg")

    if (distanceY > shrinkOn) {
      navMenu.style.height = "51px"
      navMenu.style.transition = "all 0.4s ease-in-out"
      skyImg.style.transition = "all 0.4s ease-in-out"
      this.setState({ solid: true })
      skyImg.style.height = "52px"
    } else {
      navMenu.style.height = "130px"
      skyImg.style.height = "130px"
      this.setState({ solid: false })
    }
  }
  
  admin= () => {
    const {user} = this.props.auth
    if (user.admin) {
      return(
      <Dropdown.Item href="/admin-dashboard">
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
          <Dropdown.Item href="/userdash">
            DASHBOARD
          </Dropdown.Item>
            {this.admin()}
          <Dropdown.Item onClick = {() => handleLogout(this.props.history)}>
           LOGOUT
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
    const {venue} = this.state;
    return (
      <StyledMenu id="navMenu" stackable borderless solid={this.state.solid}>
        <Menu.Header href="/">
          <StyledImg id="skyImg" src={venue.logo} width={320} />
        </Menu.Header>
        <Menu.Menu position="right">
          <StyledItem href="/calendar">
            CALENDAR
          </StyledItem>
          <StyledItem href="/">
            PRIVATE EVENTS
          </StyledItem>
          <StyledItem href="/">
            VIP TABLES
          </StyledItem>
          <StyledItem href="/cart">
            CART
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