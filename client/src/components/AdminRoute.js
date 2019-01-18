import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { AuthConsumer, } from "../providers/AuthProvider";

const AdminRoute = ({ component: Component, ...rest }) => (

  <AuthConsumer>
    { auth => 
      <Route 
        {...rest}
        render={ props => (
          auth.user.admin ? 
            <Component { ...props } />
          :
            <Redirect 
              to={{
                pathname: "/",
                state: { from: props.location, },
              }}
            />
        )}
      />
    }
  </AuthConsumer>
)

const ConnectedAdminRoute = (props) => (
  <AuthConsumer>
    { auth => 
      <AdminRoute { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedAdminRoute;