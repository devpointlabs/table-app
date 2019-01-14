import React from 'react';
import dateFns from 'date-fns';
import { Container, Icon, Segment, } from 'semantic-ui-react';
import { StyledHeader, StyledButton } from '../styles/generalitems';

class MobileCalendar extends React.Component {
  state = { 
    currentMonth: new Date(),
    selectedDate: new Date(), 
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };
  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  renderHeader = () => {
    const dateFormat = "MMMM YYYY";
    return (
        <Segment.Group horizontal fluid basic as={Segment}>
          <Segment basic>
            <StyledButton icon onClick={this.prevMonth} floated="left">
              <Icon name='chevron left' />
            </StyledButton>
          </Segment>
        <Segment basic>
          <StyledHeader textAlign='center'>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </StyledHeader>
        </Segment>
        <Segment basic>
          <StyledButton icon onClick={this.nextMonth} floated="right">
            <Icon name='chevron right' />
          </StyledButton>
        </Segment>
        </Segment.Group>
    );
  }

  render() {
    return(
      <Container style={{marginTop: '75px', }}>
        { this.renderHeader() }
      </Container>
    )
  }
}

export default MobileCalendar;