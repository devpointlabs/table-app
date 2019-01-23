import React, {Fragment} from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Image, } from 'semantic-ui-react';
import { ViewDiv, Img, H1, EditDiv, Content, EditCont, UploadText, FormDiv, FormUpload } from "../styles/profilestyle";
import '../styles/comingArtist.css';
import Dropzone from 'react-dropzone';
import { StyledButton } from '../styles/Styles';
import defaultImage from '../images/default-profile.jpg'
import { LeftDiv, RightDiv, Line, StyledHeader, ComponentContainer} from '../styles/generalitems';

class UserProfile extends React.Component {
  state = { editing: false, formValues: { first_name: '', last_name: '', email: '', city: '', file: '', }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  componentDidMount() {
    const { auth: { user: { first_name, last_name, email, city, }, }, } = this.props;
    this.setState({ formValues: { first_name, last_name, email, city, }, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { first_name, last_name, email, file, city, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { first_name, last_name, email, file, city, });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: "",
      },
    });
  }
  
  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }

  profileView = () => {
    const { auth: { user }, } = this.props;
    const { editing, } = this.state;
    return (
      <div style = {{ paddingTop: '190px', height: '100vh', display: 'flex' }}>
        <LeftDiv>
          <img 
            src={user.image || defaultImage} 
            style = {{
              height: '250px',
              width: '300px',
              display: 'block',
            }}
          />
        </LeftDiv>
        <Line vertical />
        <RightDiv>
          <StyledHeader>{user.first_name} {user.last_name}</StyledHeader>
          <StyledHeader>{user.email}</StyledHeader>
          <StyledHeader>{user.date_of_birth}</StyledHeader>
          <StyledHeader>{user.gender}</StyledHeader>
          <StyledHeader>{user.city}</StyledHeader>
          <StyledButton onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</StyledButton>
        </RightDiv>
      </div>
    )
  }

  editView = () => {
    const { formValues: { first_name, last_name, city, file } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <ComponentContainer>
        <LeftDiv bordered style = {{height: '300px'}}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                  
                >
                <div>
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop files here...</p> 
                      :
                        <UploadText>Drop an image here, or click to upload one.</UploadText>
                    }
                  </div>
                </div>
              )
            }}
          </Dropzone>
        </LeftDiv>
        <Line vertical />
        <RightDiv>
          <div style = {{paddingTop: '30px'}}>
            <Form.Input
              placeholder="First Name"
              name="first_name"
              value={first_name}
              required
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              required
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="City"
              name="city"
              value={city}
              required
              onChange={this.handleChange}
            />
            <StyledButton>Update</StyledButton>
          </div>
        </RightDiv>
        </ComponentContainer>
      </Form>
    )
  }
  
  render() {
    const { editing, } = this.state;
    return(
      <div>
        { editing ? this.editView() : this.profileView()}
      </div>
    )
  }
}

const ConnectedUserProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <UserProfile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

const styles = {
  dropzone: {
    height: "300px",
  }
}

export default ConnectedUserProfile;