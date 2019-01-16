import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSegment } from '../styles/AdminDashboardStyle'
import { StyledButton } from '../styles/generalitems'

class AdminDashboard extends React.Component{
  render() {
    return (
      <StyledSegment basic>
        <Link to='/event-form'>
          <StyledButton>
            + Add Event
          </StyledButton>
        </Link>
      </StyledSegment>
    )
  }
}

export default AdminDashboard;