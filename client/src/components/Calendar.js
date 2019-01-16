// NOT IN USE AT THIS TIME USING MOBILECALENDAR.JS

import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import CalendarCards from './CalendarCards';
import { Image, Card, Button, } from 'semantic-ui-react';

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends React.Component {
  state = { events: [
    {id: 1, host: "Midnight Tyrannosaurus", image_url: "https://nightout.s3.amazonaws.com/media/posters/53148/medium-f06b089f1db1cf56.jpg?1546886793", event_date: "Tuesday, Jan 15th, 2019", start: new Date('January 15, 2019'), end: new Date('January 15, 2019')},
    {id: 2, host: "Swamplex", image_url: "https://nightout.s3.amazonaws.com/media/posters/51313/medium-6a93586c65233c02.jpg?1541612333", event_date: "Wednesday, Jan 16th, 2019", start: new Date('January 16, 2019'), end: new Date('January 16, 2019')},
    {id: 3, host: "Up in Smoke Tour", image_url: "https://nightout.s3.amazonaws.com/media/posters/52756/medium-4a8354aea91d32c3.jpg?1545238001", event_date: "Thursday, Jan 17th, 2019", start: new Date('January 17, 2019'), end: new Date('January 17, 2019')}
  ],
};

  render() {
    return (
      <div className="App">
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "1000px", }}
          allDayAccessor
          components={{
            event: EventComponent,
          }}
        />
      </div>
    );
  }
}

class EventComponent extends React.Component {

render() {
    return (
      <div style={{ background: "#252525 !important" }}>
        <CalendarCards event={this.props.event} />
      </div>
    )
  }
}

class CellWrapper extends React.Component {
  render() {
    return (
      <div style={{height: "444px !important"}}>
        { this.props.children }
      </div>
    )
  }
}

export default Calendar;