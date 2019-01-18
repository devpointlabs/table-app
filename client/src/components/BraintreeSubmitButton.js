import React from 'react';
import { StyledButton } from '../styles/Styles'

const renderSubmitButton = ({onClick, isDisabled, text}) => {
  return (
    <StyledButton
      primary
      onClick={onClick}
      disabled={isDisabled}
    >
      { text }
    </StyledButton>
  )
}

export default renderSubmitButton;