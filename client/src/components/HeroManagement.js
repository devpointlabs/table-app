import React from 'react';
import axios from 'axios';
import { StyledHeader, StyledSegment, StyledButton, HeroImage } from '../styles/Styles';
import { Grid, Segment } from 'semantic-ui-react';

class HeroManagement extends React.Component {
  state = { heroImages: [], }

  componentDidMount() {
    axios.get('/api/heroimages')
      .then( res => {
        this.setState({ heroImages: res.data, })
      })
  }

  renderCard = (image) => (
    <Segment basic>
      <HeroImage src={image.image_url} active={image.active} />
      <br />
      <StyledButton fluid onClick={() => this.handleEdit(image.id)}>{image.active ? 'Deactivate' : 'Activate' }</StyledButton>
      <br />
      <StyledButton fluid filled onClick={() => this.handleDelete(image.id)}>Delete</StyledButton>
    </Segment>
  )

  handleDelete = id => {
    const remove = window.confirm("Are you sure you want to delete this hero image?")
    if (remove)
      axios.delete(`/api/hero_images/${id}`)
       .then( res => {
         const images = this.state.heroImages.filter( i => {
           if (i.id !== id)
            return i;
         })
         this.setState({heroImages: images,})
       })
  }

  handleEdit = (id) => {
    axios.put(`/api/hero_images/${id}`)
      .then( res => {
        const images = this.state.heroImages.map( image => {
          if(image.id === id)
            return res.data
          return image
        })
        this.setState({ heroImages: images, })
      })
  }

  render(){
    const { heroImages } = this.state;
    return(
      <StyledSegment textAlign='center'>
      <StyledHeader fSize='large' underlined>
        Manage Hero Images
      </StyledHeader>
      <Grid columns={3} centered container stackable>
        { heroImages.map( image =>
        <Grid.Column>
          {this.renderCard(image)}
        </Grid.Column>
        )}
      </Grid>
      </StyledSegment>
    )
  }
}

export default HeroManagement;