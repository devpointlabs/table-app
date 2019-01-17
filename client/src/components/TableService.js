import React from 'react';
// These are not styled components not semantic components
import { HeroWrapper, Header, Container} from '../styles/tableServiceStyle';
import { GoldButton, } from '../styles/generalitems';

class TableService extends React.Component{

  render() {
    return (
      <HeroWrapper>
        <Container>
          <Header>VIP TABLE SERVICE</Header>
          <div>
            <GoldButton>Button</GoldButton>
            <GoldButton>Virtual Tour</GoldButton>
          </div>
        </Container>
      </HeroWrapper>
    )
  }
}

export default TableService;