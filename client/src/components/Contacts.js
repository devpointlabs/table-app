import React, { Component } from 'react';
import { Line, LeftDiv, RightDiv } from '../styles/generalitems';
import { StyledHeader} from '../styles/Styles';
import axios from 'axios'

class Contacts extends Component {
  state = { venue: [], }
  
  componentDidMount() {
    axios.get(`/api/settings/1`)
    .then( res => {
      this.setState({ venue: res.data, })
    })
  }

  render() {
    const { venue, } = this.state;
    return (
      <div style = {{ paddingTop: '190px', height: '100vh', display: 'flex' }}>
        <LeftDiv>
          <StyledHeader large copperplate>contact</StyledHeader>
          <StyledHeader small gray>{venue.venue_name}</StyledHeader>
          <StyledHeader small gray>{venue.street_address}</StyledHeader>
          <StyledHeader small gray>{venue.city}</StyledHeader>
          <StyledHeader small gray>{venue.state}, {venue.zip_code}</StyledHeader>
          <StyledHeader small gray>{venue.telephone}</StyledHeader>
          <StyledHeader small gray><a href={"mailto:" + venue.email} >{venue.email}</a></StyledHeader>
        </LeftDiv>
        <Line vertical />
        <RightDiv>
          <StyledHeader small gray>{venue.about_us}</StyledHeader>
        </RightDiv>
      </div>
    )
  } 
}

export default Contacts;

