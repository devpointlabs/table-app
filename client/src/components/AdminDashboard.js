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
      </StyledSegment>
    )
  }
}

export default AdminDashboard;