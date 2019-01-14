import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { StyledSegment } from '../styles/AdminDashboardStyle'

class AdminDashboard extends React.Component{
  render() {
    return (
<<<<<<< HEAD
      <>
=======
      <StyledSegment basic>
>>>>>>> add logo
        <Link to='/event-form'>
          <Button inverted color='blue'>
            + Add Event
          </Button>
        </Link>
<<<<<<< HEAD
      </>  
=======
      </StyledSegment>
>>>>>>> add logo
    )
  }
}

export default AdminDashboard;