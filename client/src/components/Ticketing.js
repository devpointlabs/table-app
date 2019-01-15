import React from 'react';
import { Grid, Image, Form, Button, Input, Select, Header } from 'semantic-ui-react';
import { GridText, HeaderRow, } from "../styles/ticketingstyle"
import { StyledSegment } from '../styles/AdminDashboardStyle'
import axios from "axios";



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
    }

    componentDidMount() {
      axios.get(`/api/events/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ ...res.data });
      })
      .catch( err => {
        console.log(err);
      })
    }

  render () {
    const { host, image_url, event_date, event_time, dress_code, description,} = this.state
    return(
      <StyledSegment basic>
        <GridText small>
            <Grid stackable>
              <Grid.Column verticalAlign="middle" width={6}>
                <Image size="medium" centered src={image_url} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Grid>
                  <Grid.Row>
                    <GridText>{event_time}, {event_date}</GridText>
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
                      <Select compact placeholder='0' defaultValue={0} options={gen(300)} />
                    </Grid.Column>
                    <Grid.Column mobile={4} computer={4}>Add to cart button</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column mobile={4} computer={4}>Pre-Sale Tier 2 Gen-ADM</Grid.Column>
                    <Grid.Column mobile={4} computer={4}>$35</Grid.Column>
                    <Grid.Column mobile={4} computer={4}>
                      <Select compact placeholder='0' defaultValue={0} options={gen(150)} />
                    </Grid.Column>
                    <Grid.Column mobile={4} computer={4}>Add to cart button</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column mobile={4} computer={4}>VIP Bar Card Package wit $50 Bar Card</Grid.Column>
                    <Grid.Column mobile={4} computer={4}>$60</Grid.Column>
                    <Grid.Column mobile={4} computer={4}>
                      <Select compact placeholder='0' defaultValue={0} options={gen(25)} />
                    </Grid.Column>
                    <Grid.Column mobile={4} computer={4}>Add to cart button</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column mobile={4} computer={4}>Day Of Show General Admission</Grid.Column>
                    <Grid.Column mobile={4} computer={4}>$40</Grid.Column>
                    <Grid.Column mobile={4} computer={4}>
                      <Select compact placeholder='0' defaultValue={0} options={gen(200)} />
                    </Grid.Column>
                    <Grid.Column mobile={4} computer={4}>Add to cart button</Grid.Column>
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
                        <Button inline>Unlock Tickets</Button>
                        </Form.Group>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid>
          </GridText>
        </StyledSegment>
    )
  }
};

export default Ticketing;