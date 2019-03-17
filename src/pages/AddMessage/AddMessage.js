import React, { Component } from 'react'
import { connect } from 'react-redux';
import addMessage from '../../actions/addMessage';
import { Container, Form, Button } from 'reactstrap';
import { FormInput, FormTextArea } from '../../components/Form/';
import moment from 'moment';
import './AddMessage.css';

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => dispatch(addMessage(message))
  };
};

class AddMessage extends Component {

  state = {
    displayName: '',
    message: ''
  }

  // Sets display name to component state on mount if signed in.
  componentWillMount = () => {
    if (this.props.displayName) {
      this.setState({ displayName: this.props.displayName });
    }
  }

  // Takes name and value from whatever input fired the event and updates the respective state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Builds a new message object from the state and other variables. Moment.js is used for timestamping posts.
  handleFormSubmit = event => {
    event.preventDefault();
    const { displayName, message } = this.state;
    const time = moment().format('h:mm a');
    const likes = 0,
          dislikes = 0;
    // Does a local sign-in if not already.
    if (!this.props.displayName) {
      this.props.doAddDisplayName(displayName);
    }
    // Creates new message payload and sends to reducer.
    this.props.addMessage({ 
      displayName, 
      message, 
      time, 
      likes, 
      dislikes 
    });
    // Redirects to timeline after submit.
    this.props.handlePageRender('Timeline');
  }

  render() {

    // Submit button is disabled if truthy
    const isInvalid = this.state.message.length === 0 || 
                      this.state.displayName.length === 0;

    return (
      <Container>
        <h3>Add some Chatter</h3>
        <hr />
        <Form onSubmit={this.handleFormSubmit}>
          {/* Shows input for display name if not logged in */}
          {
            (this.props.displayName)
              ? null
              : <FormInput
                  label='Display Name'
                  name='displayName'
                  value={this.state.displayName}
                  placeholder='Enter a display name for this and following messages'
                  handleInputChange={this.handleInputChange}
                />
          }

          <FormTextArea 
            label='Message'
            name='message'
            value={this.state.message}
            placeholder='Enter a Chat'
            handleInputChange={this.handleInputChange}
          />

          <Button
            className='SubmitButton'
            type='submit'
            disabled={isInvalid}
          >Submit Chat</Button>
        </Form>
      </Container>
    )
  }
}

const ConnectedAddMessage = connect(null, mapDispatchToProps)(AddMessage);

export default ConnectedAddMessage;