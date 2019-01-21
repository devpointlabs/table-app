import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { StyledButton, StyledHeader, StyledImage, } from '../styles/Styles';
import placeholder from '../images/placeholder.png'
import { Container, Form, Grid } from 'semantic-ui-react';

class VenueForm extends React.Component {
  state = {
    venue_name: '',
    logo: '',
    contact_us_blurb: '',
    street_address: '',
    city: '',
    state: '',
    zip_code: '',
    telephone: '',
    email: '',
    about_us: '',
    facebook_url: '',
    twitter_url: '',
    instagram_url: '',
    google_maps: '',
    longitude: '',
    latitude: '',
    display: placeholder,
  }

  componentDidMount() {
    axios.get(`/api/settings/1`)
      .then( res => {
        this.setState({ 
          venue_name: res.data.venue_name,
          logo: res.data.logo,
          contact_us_blurb: res.data.contact_us_blurb,
          street_address: res.data.street_address,
          city: res.data.city,
          state: res.data.state,
          zip_code: res.data.zip_code,
          telephone: res.data.telephone,
          email: res.data.email,
          about_us: res.data.about_us,
          facebook_url: res.data.facebook_url,
          twitter_url: res.data.twitter_url,
          instagram_url: res.data.instagram_url,
          google_maps: res.data.google_maps,
          longitude: res.data.longitude,
          latitude: res.data.latitude,
          display: res.data.logo,
        })
      })
  }

  onDrop = (files) => {
    const image = URL.createObjectURL(files[0])
    this.setState({ ...this.state, image_url: files[0], display: image });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    let data = new FormData();
    data.append("venue_name", this.state.venue_name)
    data.append("logo", this.state.logo)
    data.append("contact_us_blurb", this.state.contact_us_blurb)
    data.append("street_address", this.state.street_address)
    data.append("city", this.state.city)
    data.append("state", this.state.state)
    data.append("zip_code", this.state.zip_code)
    data.append("telephone", this.state.telephone)
    data.append("email", this.state.email)
    data.append("about_us", this.state.about_us)
    data.append("facebook_url", this.state.facebook_url)
    data.append("twitter_url", this.state.twitter_url)
    data.append("instagram_url", this.state.instagram_url)
    data.append("google_maps", this.state.google_maps)
    data.append("longitude", this.state.longitude)
    data.append("latitude", this.state.latitude)
    axios.put(`/api/settings/1`, data)
      .then( res => this.props.history.go(`/`))
  }

  renderForm = () => {
    const { venue_name, logo, contact_us_blurb, street_address, city, state, zip_code, telephone, email, about_us, facebook_url, twitter_url, instagram_url, google_maps, longitude, latitude,} = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
          {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
            {...getRootProps()}
            style={styles.dropzone}
            >
            <input {...getInputProps()} />
            {
            isDragActive ?
            <p>Drop files here...</p> 
            :
            <p>Upload a new logo image here. Drag or click to upload</p>
            }
            </div>
          )
          }}
        </Dropzone>
        <br />
      </Form>
    )
  }

  render(){
    const { venue_name, display } = this.state;
    return(
      <Container style={{paddingTop: '175px'}}>
      <StyledHeader fSize='large' underlined textAlign='center'>
        Edit {venue_name}'s Details
      </StyledHeader>
      <Grid>
        <Grid.Column width={3}>
          <StyledImage centered src={display} />
          <StyledHeader textAlign='center'>
          Venue Logo
          </StyledHeader>
        </Grid.Column>
        <Grid.Column width={12}>
          { this.renderForm() }
        </Grid.Column>
      </Grid>
      </Container>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "100%",
    border: "1px dotted white",
    borderRadius: "5x",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
  }
}

export default VenueForm;