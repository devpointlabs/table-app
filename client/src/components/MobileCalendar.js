import React from 'react';
import dateFns from 'date-fns';
import { Container, Icon, Segment, } from 'semantic-ui-react';
import { StyledHeader, StyledButton } from '../styles/generalitems';
import CalendarCards from './CalendarCards';
// Delete these when Database is working
import Audien from '../images/Artists/Audien.jpg';
import Cesqeaux from '../images/Artists/Cesqeaux.jpg';
import DirtyDave from '../images/Artists/DirtyDave.jpg';
import DJ_Que from '../images/Artists/DJ Que.jpg';
import DJ_Jazzy from '../images/Artists/DJ_Jazzy_Jeff.jpg';
import Fashen from '../images/Artists/Fashen.jpg';
import Jason_Ross from '../images/Artists/Jason_Ross.jpg';
import Jaycee from '../images/Artists/Jaycee.jpg';
import Kid_Conrad from '../images/Artists/Kid_Conrad.jpg';
import Method_Man from '../images/Artists/Method_Man_Redman.jpg';
import Spencer from '../images/Artists/Spencer Brown.jpg';
import Subtronics from '../images/Artists/Subtronics.jpg';
import Tritonal from '../images/Artists/Tritonal.jpg';
import Valentino from '../images/Artists/Valentino_Khan.jpg';
import Calendar from './Calendar';

class MobileCalendar extends React.Component {
  state = { 
    currentMonth: new Date(),
    selectedDate: new Date(), 
    events: [
      {id: 1, host: "Audien", image_url: `${Audien}`, event_date: "Tuesday January 15th 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 2, host: "Cesqeaux", image_url: `${Cesqeaux}`, event_date: "Wednesday January 16th 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 3, host: "DirtyDave", image_url: `${DirtyDave}`, event_date: "Tuesday January 22nd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 4, host: "DJ_Que", image_url: `${DJ_Que}`, event_date: "Thursday January 24th 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 5, host: "DJ_Jazzy", image_url: `${DJ_Jazzy}`, event_date: "Friday January 25th 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 6, host: "Fashen", image_url: `${Fashen}`, event_date: "Friday February 1st 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional",},
      {id: 7, host: "Jason_Ross", image_url: `${Jason_Ross}`, event_date: "Saturday February 2nd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 8, host: "Jaycee", image_url: `${Jaycee}`, event_date: "Sunday February 3rd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 9, host: "Kid_Conrad", image_url: `${Kid_Conrad}`, event_date: "Monday February 4th 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 10, host: "Method_Man", image_url: `${Method_Man}`, event_date: "Saturday February 2nd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 11, host: "Spencer", image_url: `${Spencer}`, event_date: "Saturday February 2nd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 12, host: "Subtronics", image_url: `${Subtronics}`, event_date: "Saturday February 2nd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
      {id: 13, host: "Tritonal", image_url: `${Tritonal}`, event_date: "Saturday February 2nd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional",},
      {id: 14, host: "Valentino", image_url: `${Valentino}`, event_date: "Saturday February 2nd 2019", event_time: "9:00 PM", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional",},
      ],
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
    const { events } = this.state;
    return(
      <Container style={{marginTop: '75px',}}>
        { this.renderHeader() }
          { events.map( event =>
            <CalendarCards {...event} />
          )}
      </Container>
    )
  }
}

export default MobileCalendar;