import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        axios.post(`/api/users/${res.data.data.id}/cart`)
        .then (res => {
          this.setState({ user: res.data.data, });
          history.push("/");
        })
      })
      .catch( err => {
        console.log(err.response);
      })
    
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( err => {
        console.log(err.response);
      })
  }

  handleLogout = (history) => {    
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push("/login");
      })
      .catch( err => {
        console.log(err.response);
      })
  }

  updateUser = (id, user) => {
    let data = new FormData();
    data.append('file', user.file);
    axios.put(`/api/users/${id}?first_name=${user.first_name}&last_name=${user.last_name}&email=${user.email}&city=${user.city}`, data)
      .then( res => this.setState({ user: res.data, }) )
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
        updateUser: this.updateUser,
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;
