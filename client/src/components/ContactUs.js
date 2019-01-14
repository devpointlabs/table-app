import React, { Component } from 'react';
import { ContUs, Quote, Button, ContactHeader, } from '../styles/contact-us-style'
import { Link } from 'react-router-dom';

class ContactUs extends Component {
  render() {
    return (
      <>
        <ContUs>
          <ContactHeader>Contact <br/> Us</ContactHeader> 
          <Quote> Far far away, behind the word mountains, far from the countries Vokalia and Consanatia. </Quote>
          <Link to='/contacts'>
           <Button>Contact Us</Button>
          </Link>
        </ContUs>
      </>
    )
  }
}

export default ContactUs