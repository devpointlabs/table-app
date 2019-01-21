import React, { Component } from 'react';
import { StyledHeader, Line} from '../styles/generalitems';
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
        <div style = {{ textAlign: 'center', float: 'left', width: '50%'}}>
          <StyledHeader large copperplate>contact</StyledHeader>
          <StyledHeader small gray>{venue.venue_name}</StyledHeader>
          <StyledHeader small gray>{venue.street_address}</StyledHeader>
          <StyledHeader small gray>{venue.city}</StyledHeader>
          <StyledHeader small gray>{venue.state}, {venue.zip_code}</StyledHeader>
          <StyledHeader small gray>t: {venue.telephone}</StyledHeader>
          <StyledHeader small gray><a href={"mailto:" + venue.email} >e: {venue.email}</a></StyledHeader>
        </div>
        <Line vertical />
        <div style = {{ float: 'right', marginLeft: '40px', marginRight: '40px', paddingTop: '40px'}}>
          <StyledHeader small gray>{venue.about_us}</StyledHeader>
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

