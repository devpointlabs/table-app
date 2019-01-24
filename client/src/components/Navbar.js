import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react';
import { StyledMenu, StyledItem, StyledDrop, StyledImg } from '../styles/navbarstyle';
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
      skyImg = document.getElementById("skyImg"),
      navButton1 = document.getElementById("navButton1"),
      navButton2 = document.getElementById("navButton2"),
      navButton3 = document.getElementById("navButton3"),
      navButton4 = document.getElementById("navButton4"),
      navButton5 = document.getElementById("navButton5"),
      navButton6 = document.getElementById("navButton6"),
      navButton7 = document.getElementById("navButton7")

    if (this.props.auth.user && distanceY > shrinkOn) {
      navMenu.style.height = "51px"
      navMenu.style.transition = "all 0.4s ease-in-out"
      skyImg.style.transition = "all 0.4s ease-in-out"
      this.setState({ solid: true })
      skyImg.style.height = "52px"
      navButton3.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton4.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton5.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton6.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton7.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
    } else if (distanceY > shrinkOn) {
      navMenu.style.height = "51px"
      navMenu.style.transition = "all 0.4s ease-in-out"
      skyImg.style.transition = "all 0.4s ease-in-out"
      this.setState({ solid: true })
      skyImg.style.height = "52px"
      navButton1.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton2.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton3.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton4.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton5.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
      navButton6.style.cssText = 'border: 3px solid rgba(0, 0, 0, 0.5)'
    } else if (this.props.auth.user && distanceY < shrinkOn) {
      navMenu.style.height = "130px"
      skyImg.style.height = "130px"
      navButton3.style.cssText = 'border: 3px solid #b29d72'
      navButton4.style.cssText = 'border: 3px solid #b29d72'
      navButton5.style.cssText = 'border: 3px solid #b29d72'
      navButton6.style.cssText = 'border: 3px solid #b29d72'
      navButton7.style.cssText = 'border: 3px solid #b29d72'
      this.setState({ solid: false })
    } else if (distanceY < shrinkOn) {
      navMenu.style.height = "130px"
      skyImg.style.height = "130px"
      navButton1.style.cssText = 'border: 3px solid #b29d72'
      navButton2.style.cssText = 'border: 3px solid #b29d72'
      navButton3.style.cssText = 'border: 3px solid #b29d72'
      navButton4.style.cssText = 'border: 3px solid #b29d72'
      navButton5.style.cssText = 'border: 3px solid #b29d72'
      navButton6.style.cssText = 'border: 3px solid #b29d72'
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
      <StyledDrop item text={user.email} id='navButton7'>
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
          <StyledItem href="/login" id='navButton1'>
            LOGIN
          </StyledItem>
          <StyledItem href="/register" id='navButton2'>
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
          <StyledItem href="/calendar" id='navButton3'>
            CALENDAR
          </StyledItem>
          <StyledItem href="/" id='navButton4'>
            PRIVATE EVENTS
          </StyledItem>
          <StyledItem href="/viptables" id='navButton5'>
            VIP TABLES
          </StyledItem>
          <StyledItem href="/cart" id='navButton6'>
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