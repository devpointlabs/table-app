import React from 'react';
import dateFns from 'date-fns';
import { Container, Icon, Segment, } from 'semantic-ui-react';
import { StyledHeader, StyledButton } from '../styles/generalitems';
import CalendarCards from './CalendarCards';
import { format } from 'date-fns'
import axios from 'axios';

class MobileCalendar extends React.Component {
  state = { 
    currentMonth: new Date(),
    events: [],
    selectedMonth: [],
    filteredDates: [],
  };

  componentDidMount(){
    axios.get('/api/events')
      .then( res => {
        this.setState({
          events: res.data, } , () => {
          this.selectedMonth();
      })
    })
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1) }, () => {
        this.clearFiltered();
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1) }, () => {
        this.clearFiltered();
    });
  };

  clearFiltered = () => {
    this.setState({
      filteredDates: [] }, () => {
        this.selectedMonth();
    });
  }

  selectedMonth = () => {
    var month = format(
      new Date(this.state.currentMonth),
      'MMMM YYYY'
    )
    this.setState({ selectedMonth: month }, () => {
      this.filteredDates();
    });
  };

  filteredDates = () => {
    const { events, } = this.state;
    const fEvents = events.filter(this.dateFilter);
    this.setState({ filteredDates: fEvents, })
  }

  dateFilter = (event) => {
    var month = format(
      new Date (event.event_date),
      'MMMM YYYY'
    )
    if (month === this.state.selectedMonth)
      return event
    else
      return null
  }

  renderHeader = () => {
    const dateFormat = "MMMM YYYY";
    return (
        <Segment.Group horizontal fluid basic as={Segment} style={{paddingTop: "100px"}}>
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
    const { filteredDates } = this.state;
    return(
      <Container style={{marginTop: '75px',}}>
        { this.renderHeader() }
          { filteredDates.map( event =>
            <CalendarCards {...event} />
          )}
      </Container>
    )
  }
}

export default MobileCalendar;