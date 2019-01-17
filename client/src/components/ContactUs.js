import React, { Component } from 'react';
import { ContUs, Quote, Button, ContactHeader, } from '../styles/contact-us-style'
import { StyledButton2, } from '../styles/generalitems'
import { Link } from 'react-router-dom';

class ContactUs extends Component {
  render() {
    return (
      <>
        <ContUs>
          <ContactHeader>Contact <br/> Us</ContactHeader> 
          <Quote> Far far away, behind the word mountains, far from the countries Vokalia and Consanatia. </Quote>
          <Link to='/contacts'>
           <StyledButton2>Contact Us</StyledButton2>
          </Link>
        </ContUs>
      </>
    )
  }
}

export default ContactUs