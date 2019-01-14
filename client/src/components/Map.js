import React from 'react';
import { Image, } from 'semantic-ui-react';
import map from './gmaps_head.png';

const Map = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {/* Replace with actual map photo needed. */}
    <a href='https://www.google.com/maps/place/Sky+SLC/@40.7636865,-111.8979172,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f504fe784bb1:0xf5d34a840d1e4738!8m2!3d40.7636865!4d-111.8957285' target="_blank">
    <Image fluid src={map} />
    </a>
  </div>
)

export default Map;