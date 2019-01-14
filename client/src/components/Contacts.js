import React, { Component } from 'react';
import { Content, ContactsDiv, Head4, IMG, ImgWrap, Par } from '../styles/contactsStyle';
import sbg from "./sbg.jpg";

class Contacts extends Component {
  render() {
    return (
      <Content>
        <Head4>Contacts</Head4>
        <ContactsDiv>
          <ImgWrap>
            <IMG src={sbg}/>
            <IMG src={sbg}/>
            <IMG src={sbg}/>
            <IMG src={sbg}/>
            <IMG src={sbg}/>
            <IMG src={sbg}/>
          </ImgWrap>
          <div>
            <Par>Joe LastName</Par>
            <Par>Ian LastName</Par>
            <Par>Matt LastName</Par>
            <Par>Colton LastName</Par>
            <Par>Maris LastName</Par>
            <Par>Spencer LastName</Par>
          </div>
          <div>
            <Par>Email@email.com</Par>
            <Par>Email@email.com</Par>
            <Par>Email@email.com</Par>
            <Par>Email@email.com</Par>
            <Par>Email@email.com</Par>
            <Par>Email@email.com</Par>
          </div>
          <div>
            <Par>555-555-5555</Par>
            <Par>555-555-5555</Par>
            <Par>555-555-5555</Par>
            <Par>555-555-5555</Par>
            <Par>555-555-5555</Par>
            <Par>555-555-5555</Par>
          </div>
        </ContactsDiv>
      </Content>
    )
  }
}

export default Contacts;

