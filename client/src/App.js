import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      {/* </Container> */}
    </FetchUser>
  </Fragment>
)

export default App;
