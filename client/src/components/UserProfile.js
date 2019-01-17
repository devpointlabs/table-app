import React, {Fragment} from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Grid, Image, Header, Divider, Form, Button, Container } from 'semantic-ui-react';
import { ViewDiv, Img, H1, EditDiv, Content, EditCont, UploadText, FormDiv, FormUpload } from "../styles/profilestyle";
import '../styles/comingArtist.css';
import Dropzone from 'react-dropzone';
import { StyledButton } from '../styles/generalitems.js'

const defaultImage = 'https://www.thesmallbusinesscentre.ca/wp-content/uploads/2017/05/businessman-silhouette.jpg'

class UserProfile extends React.Component {
  state = { editing: false, formValues: { first_name: '', last_name: '', email: '', file: '', }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  componentDidMount() {
    const { auth: { user: { first_name, last_name, email, }, }, } = this.props;
    this.setState({ formValues: { first_name, last_name, email, }, });
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
    const { formValues: { first_name, last_name, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { first_name, last_name, email, file, });
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
    return (
      <Fragment>
        <ViewDiv>
          <div>
            <Img src={user.image || defaultImage} />
            <H1>{user.first_name} {user.last_name}</H1>
            <H1>{user.email}</H1>
          </div>
        </ViewDiv>
      </Fragment>
    )
  }

  editView = () => {
    const { user } = this.props;
    const { formValues: { first_name, last_name, email, file } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
      <FormUpload>
        <EditDiv>
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
        </EditDiv>
        <FormDiv>
          <div>
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
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={this.handleChange}
            />
            <StyledButton>Update</StyledButton>
          </div>
        </FormDiv>
        </FormUpload>
      </Form>
    )
  }
  
  render() {
    const { editing, } = this.state;
    return(
      <div>
        <Content>
          <EditCont>
              { editing ? this.editView() : this.profileView()}
              <div style={{marginLeft: "15%"}}>
                <StyledButton onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</StyledButton>
              </div>
          </EditCont>
        </Content>
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