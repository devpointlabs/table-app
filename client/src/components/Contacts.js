import React, { Component } from 'react';
import { Content, ContactsDiv, Head4, IMG, ImgWrap, Par } from '../styles/contactsStyle';
import { StyledHeader, Line} from '../styles/generalitems';
import { Link } from 'react-router-dom';
import sbg from "./sbg.jpg";

class Contacts extends Component {
  render() {
    return (
      <div style = {{ paddingTop: '190px', height: '100vh', display: 'flex' }}>
        <div style = {{ textAlign: 'center', float: 'left', width: '50%'}}>
          <StyledHeader large copperplate>contact</StyledHeader>
          <StyledHeader small gray>Sky SLC</StyledHeader>
          <StyledHeader small gray>149 Pierpont Ave</StyledHeader>
          <StyledHeader small gray>Salt Lake City</StyledHeader>
          <StyledHeader small gray>UT 84101</StyledHeader>
          <StyledHeader small gray>t: 801.883.8714</StyledHeader>
          <StyledHeader small gray><a href='mailto:contact@skyslc.com'>e: contact@skyslc.com</a></StyledHeader>
        </div>
        <Line vertical />
        <div style = {{ float: 'right', marginLeft: '40px', marginRight: '40px', paddingTop: '40px'}}>
          <StyledHeader small gray>In 2013, Ken Dinsmore found himself at the world renowned Burning Man.</StyledHeader>
          <StyledHeader small gray>
            As a temporary metropolis dedicated to community, art, self-expression, and self-reliance,
            he was impressed by the energy created by the congregation. He wanted to share this with his 
            home of Salt Lake City and this building is his “gift to downtown.” In March of 2015, just a year 
            after breaking ground, SKY was ready to revolutionize the way people view Utah nightlife.
          </StyledHeader>
          <StyledHeader small gray>
            SKY is a versatile 3-floor space used for large scale events, weddings, private parties, concerts and 
            nightclub events. The 15.000 sq ft open-air building is complete with the optimum sound, 300′′video screen, glass 
            retractable roof, 20 VIP suites, 14 garage doors and performance lighting unlike anything else available in SLC; 
            rivaling any other renowned entertainment facility in the world! Night Club, Event Space, Lounge and Patio... 
            Please come check us out at 149 Pierpont Ave, Downtown Salt Lake.
          </StyledHeader>
          <StyledHeader small gray>Call or email us to tour the space, we know you’ll love it!</StyledHeader>
        </div>
      </div>
    )
  } 
}

// Sky SLC
// 149 Pierpont Ave,
// Salt Lake City,
// UT 84101
// t: 801.883.8714
// e:contact@skyslc.com

export default Contacts;

