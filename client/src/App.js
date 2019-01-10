import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import EventDetails from './components/EventDetails';
import Calendar from './components/Calendar';
import Profile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from './components/AdminRoute';
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";
import Ticketing from './components/Ticketing';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      {/* <Container> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/ticketing' component={Ticketing} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path='/event' component={EventDetails} />
          <Route exact path='/calendar' component={Calendar} />
          <Route component={NoMatch} />
        </Switch>
      {/* </Container> */}
    </FetchUser>
  </Fragment>
)

export default App;
