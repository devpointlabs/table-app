import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { StyledSegment } from '../styles/AdminDashboardStyle'

class AdminDashboard extends React.Component{
  render() {
    return (
      <StyledSegment basic>
        <Link to='/event-form'>
          <Button inverted color='blue'>
            + Add Event
          </Button>
        </Link>
        <Form>
          <Form.Field>
            <label>email</label>
            <input placeholder='email@email.com' />
          </Form.Field>
        </Form>
        <Link to='/event-form'>
          <Button inverted color='red'>
              + Add user as admin
            </Button>
        </Link>
      </StyledSegment>
    )
  }
}

export default AdminDashboard;