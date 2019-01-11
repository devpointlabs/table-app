import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import EventForm from './components/EventForm';
import EventDetails from './components/EventDetails';
import Calendar from './components/Calendar';
import Profile from "./components/UserProfile";
import EventForm from './components/EventForm';
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from './components/AdminRoute';
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";
import Ticketing from './components/Ticketing';
import AdminDashboard from './components/AdminDashboard';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      {/* <Container> */}
      <div style={styles.body}>
        <Switch>
          <AdminRoute exact path='/admin-dashboard' component={AdminDashboard} />
          <Route exact path="/" component={Home} />
          <Route exact path='/ticketing' component={Ticketing} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/newevent" component={EventForm} />
          <Route exact path='/event' component={EventDetails} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path="/newevent" component={EventForm} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      {/* </Container> */}
    </FetchUser>
    <Footer style={styles.footer} />
  </Fragment>
)

const styles = {
  body: { 
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    margin: 0,
    top: 0,
  }
};

export default App;
