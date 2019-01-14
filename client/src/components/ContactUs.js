import React, { Component } from 'react';
import { ContUs, Quote, Button, ContactHeader, } from '../styles/contact-us-style'

class ContactUs extends Component {
  render() {
    return (
      <>
        <ContUs>
          <ContactHeader>Contact <br/> Us</ContactHeader> 
          <Quote> Far far away, behind the word mountains, far from the countries Vokalia and Consanatia. </Quote>
          <Button>Contact Us</Button>
        </ContUs>
      </>
    )
  }
}

export default ContactUs