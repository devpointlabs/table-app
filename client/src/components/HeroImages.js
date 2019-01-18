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
    return(
      <div>IMAGES</div>
    )
  }
}

export default HeroImages;