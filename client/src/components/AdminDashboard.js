import React from 'react';
import { Button, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class AdminDashboard extends React.Component{
  render() {
    return (
      <div>
        <Link to=''>
          <Button inverted color='blue'>
            + Add Event
          </Button>
        </Link>
      </div>  
    )
  }
}

export default AdminDashboard;