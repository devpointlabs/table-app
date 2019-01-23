import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, Link, } from 'react-router-dom'
import { Dropdown, Image } from 'semantic-ui-react';
import { StyledMenu, StyledDropMobile, } from '../styles/navbarstyle';
import axios from 'axios';
import '../App.css'

class MobileNavbar extends React.Component {
  state = { venue: [], };

  componentDidMount() {
    axios.get(`/api/settings/1`)
      .then( res => {
        this.setState({ venue: res.data, })
      })
  }
  
  // admin= () => {
  //   const {user} = this.props.auth
  //   if (user.admin) {
  //     return(
  //     <Dropdown.Item href="/admin-dashboard">
  //       ADMIN DASHBOARD
  //     </Dropdown.Item>
  //     )
  //   }
  // }


  // NavItems = () => {
  //   const { user, handleLogout, } = this.props.auth;
  //   const { venue } = this.state;
    
  //   if (user) {
  //     return (
  //     <StyledDrop item>
  //       <Dropdown.Menu>
  //         <Dropdown.Item href="/profile">
  //           PROFILE
  //         </Dropdown.Item>
  //         <Dropdown.Item href="/userdash">
  //           DASHBOARD
  //         </Dropdown.Item>
  //           {this.admin()}
  //         <Dropdown.Item onClick = {() => handleLogout(this.props.history)}>
  //          LOGOUT
  //         </Dropdown.Item>
  //       </Dropdown.Menu>
  //     </StyledDrop>
      
  //     )
  //   } else {
  //     return (
  //       <>
  //         <StyledItem href="/login" id='navButton1'>
  //           LOGIN
  //         </StyledItem>
  //         <StyledItem href="/register" id='navButton2'>
  //           REGISTER
  //         </StyledItem>
  //       </>
  //     )
  //   }
  // }

  
  render() {
    const {venue} = this.state;
    return (
      <StyledMenu stackable borderless solid>
          <Link to='/'>
            <Image src={venue.logo} style={{width: '50%', margin: 'auto'}} />
          </Link>
        <StyledDropMobile item>
          <Dropdown.Menu>
            <Dropdown.Item href='/calendar'>
              CALENDAR
            </Dropdown.Item>
            <Dropdown.Item href='/'>
              PRIVATE EVENTS
            </Dropdown.Item>
            <Dropdown.Item href='/'>
              VIP TABLES
            </Dropdown.Item>
            <Dropdown.Item href='/cart'>
              CART
            </Dropdown.Item>
          </Dropdown.Menu>
        </StyledDropMobile>
      </StyledMenu>
    )
  }
}

export class ConnectedMobileNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <MobileNavbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedMobileNavbar);