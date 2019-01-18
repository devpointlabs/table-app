import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { StyledButton, StyledHeader, StyledImage, } from '../styles/Styles';
import { Container, Form, } from 'semantic-ui-react';
import placeholder from '../images/placeholder.png'


class HeroForm extends React.Component {
  state = {
    image_url: '',
    display: placeholder,
    active: true,
  }

  onDrop = (files) => {
    const image = URL.createObjectURL(files[0])
    this.setState({ ...this.state, image_url: files[0], display: image });
  }

  handleSubmit = (e) => {
    let data = new FormData();
    data.append("image_url", this.state.image_url)
    data.append("active", this.state.active)
    e.preventDefault();
    axios.post(`/api/hero_images`, data)
      .then( res => this.props.history.push(`/`))
  }

  render() {
    return(
      <Container style={{paddingTop: '175px'}}>
        <StyledHeader fSize='large' underlined textAlign="center">
        Add Hero Image
        </StyledHeader>
        <StyledImage centered src={this.state.display} />
        <br />
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
                      <p>Upload new hero image here. Drag or click to upload</p>
                    }
                  </div>
                )
              }}
              </Dropzone>
              <br />
              <StyledButton>Submit</StyledButton>
            </Form>
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

export default HeroForm;