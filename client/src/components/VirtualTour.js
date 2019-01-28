import React from 'react';
import Iframe from 'react-iframe';
import { ComponentContainer } from '../styles/generalitems';

const VirtualTour = () => (
  <ComponentContainer style = {{paddingBottom: '600px'}}>
    <Iframe url="https://www.google.com/maps/embed?pb=!4v1547845260998!6m8!1m7!1sCAoSLEFGMVFpcE91ek9GZVYxR290YzZsX1l5M3lzdWRaOURSdy1aTnpMa0hvOGtR!2m2!1d40.7637303!2d-111.8957963!3f343.5!4f0!5f0.7820865974627469" 
      width="100%" 
      height="480" 
      allowfullscreen
    />
  </ComponentContainer>
)

export default VirtualTour;