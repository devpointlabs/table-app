import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Marker, Feature } from 'react-mapbox-gl'
import Pointer from '../images/pointer.png'

const accessToken = "pk.eyJ1IjoieGVubW9yZGluIiwiYSI6ImNqcXpzYWM1ZDAxcWQzeXF4dnNzZjhzbjcifQ.8X2foh6zMetsEbVYLPXbUg";
const style = "mapbox://styles/mapbox/dark-v10";

const Map = ReactMapboxGl({
  accessToken
});

const mapStyle = {
  height: '300px',
  width: '100%',
};

const center = [-111.895558, 40.763691]
const zoom = [16.38]

const googleMaps = () => {
  return(
  <div>
  <a href='https://www.google.com/maps/place/Sky+SLC/@40.7636865,-111.8979172,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f504fe784bb1:0xf5d34a840d1e4738!8m2!3d40.7636865!4d-111.8957285' target="_blank"></a>
  </div>
)
}


class Maps extends Component { 
  render() {
    return (
      <Map
        style={style}
        containerStyle={mapStyle}
        center={center}
        zoom={zoom}>
        <Marker
        coordinates={center}
        anchor="bottom">
        <a href='https://www.google.com/maps/place/Sky+SLC/@40.7636865,-111.8979172,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f504fe784bb1:0xf5d34a840d1e4738!8m2!3d40.7636865!4d-111.8957285' target="_blank">
        <img src={Pointer}/>
        </a>
        </Marker>
      </Map>
    );
  }
}

export default Maps;