import React, { Component } from 'react';
import ReactMapboxGl, { Marker, } from 'react-mapbox-gl'
import Pointer from '../images/pointer.png'
import axios from 'axios';

const accessToken = "pk.eyJ1IjoieGVubW9yZGluIiwiYSI6ImNqcXpzYWM1ZDAxcWQzeXF4dnNzZjhzbjcifQ.8X2foh6zMetsEbVYLPXbUg";
const style = "mapbox://styles/mapbox/dark-v10"

const Map = ReactMapboxGl({
  accessToken
});

const mapStyle = {
  height: '300px',
  width: '100%',
};

const zoom = [16.38]

class Maps extends Component { 
  state = { venue: [], center: [], loaded: false }
  
  componentDidMount() {
    axios.get(`/api/settings/1`)
    .then( res => {
      this.setState({ venue: res.data, }, () => this.setCenter())
    })
  }

  setCenter = () => {
    const center = [this.state.venue.longitude, this.state.venue.latitude]
    this.setState({ center: center, loaded: true })
  }

  renderMap = () => {
    const {venue, center} = this.state;
    return(
      <Map
        style={style}
        containerStyle={mapStyle}
        center={center}
        zoom={zoom}>
        <Marker
          coordinates={center}
          anchor="bottom">
          <a href={venue.google_maps} target="_blank" rel="noopener noreferrer">
            <img src={Pointer} alt='' />
          </a>
        </Marker>
      </Map>
    )
  }
  
  render() {
    const {loaded} = this.state;
    return ( 
      <div>
      { loaded ? this.renderMap() : null }
      </div>
    );
  }
}

export default Maps;