import React, {Fragment} from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Grid, Image, Header, Divider, Form, Button, Container } from 'semantic-ui-react';
import { ViewDiv, Img, H1, EditDiv, Content, EditCont } from "../styles/profilestyle";
import '../styles/comingArtist.css';
import Dropzone from 'react-dropzone';
import { StyledButton } from '../styles/generalitems.js'

const defaultImage = 'https://www.thesmallbusinesscentre.ca/wp-content/uploads/2017/05/businessman-silhouette.jpg'

class UserProfile extends React.Component {
  state = { editing: false, formValues: { name: '', email: '', file: '', }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  componentDidMount() {
    const { auth: { user: { name, email, }, }, } = this.props;
    this.setState({ formValues: { name, email, }, });
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
    const { formValues: { name, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { name, email, file, });
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
            <H1>{user.name}</H1>
            <H1>{user.email}</H1>
          </div>
        </ViewDiv>
      </Fragment>
    )
  }

  editView = () => {
    const { user } = this.props;
    const { formValues: { name, email, file } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
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
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> 
                    :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </EditDiv>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <StyledButton>Update</StyledButton>
        </Grid.Column>
      </Form>
    )
  }
  
  render() {
    const { editing, } = this.state;
    return(
      <div style={{margin: "10% auto"}}>
        <Content>
          <EditCont>
            <div>
              { editing ? this.editView() : this.profileView()}
              <div>
                <StyledButton onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</StyledButton>
              </div>
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
