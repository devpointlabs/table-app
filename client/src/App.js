import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import EventDetails from './components/EventDetails';
import UserProfile from "./components/UserProfile";
import UserDash from './components/UserDash';
import EventForm from './components/EventForm';
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from './components/AdminRoute';
import { Container, Responsive } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";
import Ticketing from './components/Ticketing';
import Cart from "./components/Cart";
import AdminDashboard from './components/AdminDashboard';
import Contacts from './components/Contacts';
import MobileCalendar from './components/MobileCalendar';
import PaymentSuccess from './components/PaymentSuccess';
import HeroForm from './components/HeroForm';
import HeroManagement from './components/HeroManagement';
import VirtualTour from './components/VirtualTour';
import Reviews from './components/Reviews';
import VenueForm from './components/VenueForm'
import MobileNavbar from './components/MobileNavbar';
import axios from 'axios';
import VipTables from './components/VipTables';

class App extends React.Component {
  state = { venue: [], }

  componentDidMount(){
    axios.get(`/api/settings/1`)
    .then( res => {
      this.setState({ venue: res.data, }, () => this.title(), )
    })
  }

  title = () => {
    document.title = this.state.venue.venue_name;
  }

  Navbars = () => (
    <div>
      <Responsive maxWidth={1000}><MobileNavbar /></Responsive>
      <Responsive minWidth={1001}><Navbar /></Responsive>
    </div>
  )

  render() {
    return(
    <Fragment>
      {this.Navbars()}
      <FetchUser>
        <Container fluid>
          <Switch >
            <AdminRoute exact path='/admin-dashboard' component={AdminDashboard} />
            <AdminRoute exact path='/event-form' component={EventForm}/>
            <AdminRoute exact path='/hero-form' component={HeroForm}/>
            <AdminRoute exact path='/hero-management' component={HeroManagement}/>
            <AdminRoute exact path='/venue-form' component={VenueForm}/>
            <Route exact path="/" component={Home} />
            <Route exact path='/ticketing/:id' component={Ticketing} />
            <ProtectedRoute exact path="/profile" component={UserProfile} />
            <ProtectedRoute exact path='/userdash' component={UserDash} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path='/event/:id' component={EventDetails} />
            <Route exact path='/calendar' component={MobileCalendar} />
            <Route exact path='/payment_success' component={PaymentSuccess} />
            <Route exact path='/virtual_tour' component={VirtualTour} />
            <Route exact path='/reviews' component={Reviews} />
            <Route exact path='/viptables' component={VipTables} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
      <Footer style={styles.footer} />
    </Fragment>
    )
  }
}

const styles = {
  body: { 
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    margin: 0,
    top: 0,
    position: 'static',
  }
};

export default App;