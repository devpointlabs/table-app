import React from 'react';
import { Grid, Form, Input, Select, } from 'semantic-ui-react';
import { GridText, HeaderRow, } from "../styles/ticketingstyle"
import { StyledSegment } from '../styles/AdminDashboardStyle'
import { StyledButton, StyledImage, StyledHeader } from '../styles/Styles'
import axios from "axios";
import { format } from 'date-fns'



const gen = (v) => {
  return [...Array(v+1).keys()].map( a => ({value: a, text: a, key: a}) )
}

class Ticketing extends React.Component {
  state = {
    host: "",
    image_url: "",
    event_date: "",
    dress_code: "",
    description: "",
    event_time: "",
    available_tickets: 0,
    tier1: 0,
    tier2: 0,
    tier3: 0,
    tier4: 0,
    }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ ...res.data }, () => this.dateFormat());
    })
    .catch( err => {
      console.log(err);
    })
  }

  handleChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  }


  dateFormat = () => {
    var result = format(
      new Date(this.state.event_date),
      'dddd MMMM Do YYYY'
    )
    this.setState({ date: result, }, () => this.timeFormat()
    )
  }

  timeFormat = () => {
    var tresult = format(
      new Date(this.state.event_time),
      'h:mm A'
    )
    this.setState({ time: tresult, })
  }

  decrement_available = (q) => {
    let dec = (this.state.available_tickets - q )
    this.setState({ available_tickets: dec})
  }

  add_to_cart1 = () => {
    let r_ticket = {event_id: this.state.id, quantity: this.state.tier1, ticket_type: "tier1"}
    axios.post(`/api/r_tickets`, r_ticket )
      .then (res => {
        this.setState({ tier1: 0, });
        this.decrement_available(r_ticket.quantity)
      })
}
  add_to_cart2 = () => {
    let r_ticket = {event_id: this.state.id, quantity: this.state.tier2, type: "tier2"}
    axios.post(`/api/r_tickets`, r_ticket )
      .then (res => {
        this.setState({ tier2: 0, });
        this.decrement_available(r_ticket.quantity)
      })
}

  add_to_cart3 = () => {
    let r_ticket = {event_id: this.state.id, quantity: this.state.tier3, type: "tier3"}
    axios.post(`/api/r_tickets`, r_ticket )
      .then (res => {
        this.setState({ tier3: 0, });
        this.decrement_available(r_ticket.quantity)
      })
}

  add_to_cart4 = () => {
    let r_ticket = {event_id: this.state.id, quantity: this.state.tier4, type: "tier4"}
    axios.post(`/api/r_tickets`, r_ticket )
      .then (res => {
        this.setState({ tier4: 0, });
        this.decrement_available(r_ticket.quantity)
      })
}
  
  render () {
    const { host, image_url, date, time, tier1, tier2, tier3, tier4, available_tickets} = this.state
    return(
      <StyledSegment basic>
        <GridText small>
          <Form onSubmit={null}>
          <Grid stackable>
              <Grid.Column verticalAlign="middle" width={6}>
                <StyledImage centered src={image_url} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Grid>
                    <Grid.Row>
                      <GridText><StyledHeader>{time}, {date}</StyledHeader></GridText>
                    </Grid.Row>
                    <Grid.Row>
                      <GridText large><StyledHeader fSize='large'>{host}</StyledHeader></GridText>
                    </Grid.Row>          
                    <HeaderRow>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gray>
                        <StyledHeader style={{paddingTop: '10px'}}>Ticket Type</StyledHeader>
                        </GridText>
                      </Grid.Column>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gray>
                          <StyledHeader style={{paddingTop: '10px'}}>Price</StyledHeader>
                        </GridText>
                      </Grid.Column>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gray>
                        <StyledHeader style={{paddingTop: '10px'}}>QTY</StyledHeader>
                        </GridText>
                      </Grid.Column>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gold gray>
                        <StyledHeader style={{paddingTop: '10px'}}>Reset QTY</StyledHeader>
                        </GridText>
                      </Grid.Column>
                    </HeaderRow>

                    <Grid.Row>
                        <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>Pre-Sale Gen.ADM</StyledHeader></Grid.Column>
                        <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>$25</StyledHeader></Grid.Column>
                        
                        <Grid.Column mobile={4} computer={4}>
                          <Select compact placeholder='0' defaultValue={0} name="tier1" value={tier1} onChange={this.handleChange} options={gen(available_tickets)} />
                        </Grid.Column>

                        <Grid.Column mobile={4} computer={4}>
                          <StyledButton onClick={() => this.add_to_cart1()}>
                          <StyledHeader fSize='small'>Add to cart</StyledHeader>
                          </StyledButton>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>Pre-Sale Tier 2 Gen-ADM</StyledHeader></Grid.Column>
                      <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>$35</StyledHeader></Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <Select compact placeholder='0' defaultValue={0} name="tier2" value={tier2} onChange={this.handleChange} options={gen(available_tickets)} />
                      </Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <StyledButton onClick={() => this.add_to_cart2()}>
                        <StyledHeader fSize='small'>Add to cart</StyledHeader>
                        </StyledButton>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>VIP Bar Card Package wit $50 Bar Card</StyledHeader></Grid.Column>
                      <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>$60</StyledHeader></Grid.Column>
                      
                      <Grid.Column mobile={4} computer={4}>
                        <Select compact placeholder='0' defaultValue={0} name="tier3" value={tier3} onChange={this.handleChange} options={gen(available_tickets)} />
                      </Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <StyledButton onClick={() => this.add_to_cart3()}>
                        <StyledHeader fSize='small'>Add to cart</StyledHeader>
                        </StyledButton>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>Day Of Show General Admission</StyledHeader></Grid.Column>
                      <Grid.Column mobile={4} computer={4}><StyledHeader fSize='small'>$40</StyledHeader></Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <Select compact placeholder='0' defaultValue={0} name="tier4" value={tier4} onChange={this.handleChange} options={gen(available_tickets)} />
                      </Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <StyledButton onClick={() => this.add_to_cart4()}>
                        <StyledHeader fSize='small'>Add to cart</StyledHeader>
                        </StyledButton>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column width={16}>
                        <Form>
                          <Form.Group width="equal">
                          <Form.Field inline>
                            <label>
                              <GridText>
                              <StyledHeader fSize='large'>Promo Code:</StyledHeader>
                              </GridText>
                            </label>
                            <Input />
                          </Form.Field>
                          <StyledButton inline>Unlock Tickets</StyledButton>
                          </Form.Group>
                        </Form>
                      </Grid.Column>
                    </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid>
          </Form>
        </GridText>
      </StyledSegment>
    )
  }
};

export default Ticketing;