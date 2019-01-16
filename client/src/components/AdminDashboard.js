import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSegment } from '../styles/AdminDashboardStyle'
import { StyledButton } from '../styles/Styles'
import { Icon } from 'semantic-ui-react'

class AdminDashboard extends React.Component{
  render() {
    return (
      <StyledSegment basic>
        <Link to='/event-form'>
          <StyledButton icon>
            <Icon name="plus" /> Add Event
          </StyledButton>
        </Link>
        <Link to='/hero-form'>
          <StyledButton icon>
            <Icon name="plus" /> Add New Hero Image
          </StyledButton>
        </Link>
        <Link to='/hero-management'>
          <StyledButton>
            Manage Hero Images
          </StyledButton>
        </Link>
        <Link to='/venue-form'>
          <StyledButton>
            Edit Venue Details
          </StyledButton>
        </Link>
        {/* <Form>
          <Form.Field>
            <label>email</label>
            <input placeholder='email@email.com' />
          </Form.Field>
        </Form>
        <Link to='/event-form'>
          <Button inverted color='red'>
              + Add user as admin
            </Button>
        </Link> */}
      </StyledSegment>
    )
  }
}

export default AdminDashboard;