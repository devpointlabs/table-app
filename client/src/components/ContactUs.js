import React, { Component } from 'react';
import { ContUs, Quote, ContactHeader, } from '../styles/contact-us-style'
import { StyledButton } from '../styles/Styles'
import { Link } from 'react-router-dom';
import axios from 'axios';

class ContactUs extends Component {
  state = {venue: [],}

  componentDidMount(){
    axios.get(`/api/settings/1`)
    .then( res => {
      this.setState({ venue: res.data, })
    })
  }

  render() {
    const {venue} = this.state
    return (
      <>
        <ContUs>
          <ContactHeader>Contact Us</ContactHeader> 
          <Quote> {venue.contact_us_blurb} </Quote>
          <Link to='/contacts'>
           <StyledButton large filled>Contact Us</StyledButton>
          </Link>
        </ContUs>
      </>
    )
  }
}

export default ContactUs