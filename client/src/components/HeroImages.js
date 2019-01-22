import React from 'react';
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class HeroImages extends React.Component {
  state = { heroImages: [],  };

  componentDidMount() {
    axios.get('/api/hero_images')
      .then( res => {
        this.setState({ heroImages: res.data, })
      })
  }

  render() {
     const {heroImages} = this.state;
    return(
      <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} interval='7000' showStatus={false}>
        { heroImages.map(image =>{
          return(
            <div>
            <img src={image.image_url} alt='Carousel Images' />
          </div>
            )
        })
        }
      </Carousel>
    )
  }
}

export default HeroImages;