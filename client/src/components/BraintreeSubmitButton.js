import React from 'react';
import { StyledButton } from '../styles/Styles'
import axios from 'axios'

const clear_cart = () =>{
  axios.delete('/api/clear_cart')
}

const renderSubmitButton = ({onClick, isDisabled, text}) => {
  return (
    <StyledButton
      primary
      onClick={function(event){onClick(); clear_cart()}}
      // onClick={clear_cart}
      disabled={isDisabled}
    >
      { text }
    </StyledButton>
  )
}

export default renderSubmitButton;