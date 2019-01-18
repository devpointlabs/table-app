import React, { Component } from 'react';
import { ContUs, Quote, ContactHeader, } from '../styles/contact-us-style'
import { StyledButton } from '../styles/Styles'
import { Link } from 'react-router-dom';

class ContactUs extends Component {
  render() {
    return (
      <>
        <ContUs>
          <ContactHeader>Contact Us</ContactHeader> 
          <Quote> Far far away, behind the word mountains, far from the countries Vokalia and Consanatia. </Quote>
          <Link to='/contacts'>
           <StyledButton large filled>Contact Us</StyledButton>
          </Link>
        </ContUs>
      </>
    )
  }
}

export default ContactUs