import React from 'react';
import { Grid, Form, Input, Select, } from 'semantic-ui-react';
import { GridText, HeaderRow, } from "../styles/ticketingstyle"
import { StyledSegment } from '../styles/AdminDashboardStyle'
import { StyledButton, StyledImage, } from '../styles/Styles'
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
                      <GridText>{time}, {date}</GridText>
                    </Grid.Row>
                    <Grid.Row>
                      <GridText large>{host}</GridText>
                    </Grid.Row>          
                    <HeaderRow>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gray>
                          Ticket Type
                        </GridText>
                      </Grid.Column>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gray>
                          Price
                        </GridText>
                      </Grid.Column>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gray>
                          QTY
                        </GridText>
                      </Grid.Column>
                      <Grid.Column mobile={4} computer={4}>
                        <GridText large gold gray>
                          Reset QTY
                        </GridText>
                      </Grid.Column>
                    </HeaderRow>

                    <Grid.Row>
                        <Grid.Column mobile={4} computer={4}>Pre-Sale Gen.ADM</Grid.Column>
                        <Grid.Column mobile={4} computer={4}>$25</Grid.Column>
                        
                        <Grid.Column mobile={4} computer={4}>
                          <Select compact placeholder='0' defaultValue={0} name="tier1" value={tier1} onChange={this.handleChange} options={gen(available_tickets)} />
                        </Grid.Column>

                        <Grid.Column mobile={4} computer={4}>
                          <StyledButton onClick={() => this.add_to_cart1()}>
                            Add to cart
                          </StyledButton>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column mobile={4} computer={4}>Pre-Sale Tier 2 Gen-ADM</Grid.Column>
                      <Grid.Column mobile={4} computer={4}>$35</Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <Select compact placeholder='0' defaultValue={0} name="tier2" value={tier2} onChange={this.handleChange} options={gen(available_tickets)} />
                      </Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <StyledButton onClick={() => this.add_to_cart2()}>
                          Add to cart
                        </StyledButton>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column mobile={4} computer={4}>VIP Bar Card Package wit $50 Bar Card</Grid.Column>
                      <Grid.Column mobile={4} computer={4}>$60</Grid.Column>
                      
                      <Grid.Column mobile={4} computer={4}>
                        <Select compact placeholder='0' defaultValue={0} name="tier3" value={tier3} onChange={this.handleChange} options={gen(available_tickets)} />
                      </Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <StyledButton onClick={() => this.add_to_cart3()}>
                          Add to cart
                        </StyledButton>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column mobile={4} computer={4}>Day Of Show General Admission</Grid.Column>
                      <Grid.Column mobile={4} computer={4}>$40</Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <Select compact placeholder='0' defaultValue={0} name="tier4" value={tier4} onChange={this.handleChange} options={gen(available_tickets)} />
                      </Grid.Column>

                      <Grid.Column mobile={4} computer={4}>
                        <StyledButton onClick={() => this.add_to_cart4()}>
                          Add to cart
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
                                Promo Code:
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