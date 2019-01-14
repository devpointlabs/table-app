import React from 'react';
import { Image, Button, Grid, Segment } from 'semantic-ui-react';
import { StyledButton, StyledButton2, StyledHeader, StyledSubHeader2, StyledComingImage, StyledSegment2 } from '../styles/generalitems';
import { Link, } from 'react-router-dom';

class CalendarCards extends React.Component {
  render() {
    const { id, host, image_url, event_date, event_time, description } = this.props;
    return(
      <StyledSegment2 style={{maxWidth: "700px"}} >
        <Grid columns={2} stackable>
          <Grid.Column>
              <StyledComingImage src={image_url} />
          </Grid.Column>
          <Grid.Column width={6} style={{ marginTop: "15%"}}>
              <Grid.Row>
                <StyledHeader>{host}</StyledHeader>
              </Grid.Row>
              <Grid.Row>
                <StyledSubHeader2>{event_date}</StyledSubHeader2>
              </Grid.Row>
              <Grid.Row>
                <StyledSubHeader2>{event_time}</StyledSubHeader2>
              </Grid.Row>
              <Grid.Row>
                <Link to={`/events/${id}`}>
                <StyledButton fluid>Tables</StyledButton>
                </Link>
              </Grid.Row>
              <Grid.Row>
                <Link to={`/events/${id}`}>
                  <StyledButton2 fluid>Tickets</StyledButton2>
                </Link>
              </Grid.Row>
          </Grid.Column>
        </Grid>
      </StyledSegment2>
    )
  }
}

export default CalendarCards;