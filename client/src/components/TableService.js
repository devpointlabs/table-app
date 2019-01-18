import React from 'react';
// These are not styled components not semantic components
import { HeroWrapper, Header, Container} from '../styles/tableServiceStyle';
import { StyledButton, } from '../styles/Styles'

class TableService extends React.Component{

  render() {
    return (
      <HeroWrapper>
        <Container>
          <Header>VIP TABLE SERVICE</Header>
          <div>
            <StyledButton large filled>Button</StyledButton>
            <StyledButton large filled>Virtual Tour</StyledButton>
          </div>
        </Container>
      </HeroWrapper>
    )
  }
}

export default TableService;