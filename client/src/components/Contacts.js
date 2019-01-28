import React, { Component } from 'react';
import { Line, LeftDiv, RightDiv } from '../styles/generalitems';
import { StyledHeader} from '../styles/Styles';
import axios from 'axios'

class Contacts extends Component {
  state = { venue: [], text: '' }
  
  componentDidMount() {
    axios.get(`/api/settings/1`)
    .then( res => {
      this.setState({ venue: res.data,})
      this.setState({ text: this.state.venue.about_us })
    })
  }

  render() {
    const { venue, text } = this.state;
    return (
      <div style = {{ paddingTop: '190px', height: '100vh', display: 'flex' }}>
        <LeftDiv>
          <StyledHeader fSize = 'large' copperplate>contact</StyledHeader>
          <StyledHeader fSize = 'small' gray defaultFont>{venue.venue_name}</StyledHeader>
          <StyledHeader fSize = 'small' gray defaultFont>{venue.street_address}</StyledHeader>
          <StyledHeader fSize = 'small' gray defaultFont>{venue.city}</StyledHeader>
          <StyledHeader fSize = 'small' gray defaultFont>{venue.state}, {venue.zip_code}</StyledHeader>
          <StyledHeader fSize = 'small' gray defaultFont>{venue.telephone}</StyledHeader>
          <StyledHeader fSize = 'small' gray defaultFont><a href={"mailto:" + venue.email} >{venue.email}</a></StyledHeader>
        </LeftDiv>
        <Line vertical />
        <RightDiv>
          <StyledHeader fSize = 'small' gray defaultFont spaced>
          {
            text.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
            })
          }
          </StyledHeader>
        </RightDiv>
      </div>
    )
  } 
}

export default Contacts;

