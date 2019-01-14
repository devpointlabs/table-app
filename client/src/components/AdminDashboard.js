import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { StyledSegment } from '../styles/AdminDashboardStyle'

class AdminDashboard extends React.Component{
  render() {
    return (
      <>
        <Link to='/event-form'>
          <StyledSegment basic>
            <Button inverted color='blue'>
              + Add Event
            </Button>
          </StyledSegment>
        </Link>
      </>  
    )
  }
}

export default AdminDashboard;