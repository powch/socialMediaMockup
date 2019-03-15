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
    const time = moment().format('h:m a');
    const likes = 0,
          dislikes = 0;
    this.props.addMessage({ displayName, message, time, likes, dislikes });
    this.props.handlePageRender('Timeline');
  }

  render() {
    return (
      <Container>
        <h3>Add some Chatter</h3>
        <hr />
        <Form>
          <FormInput
            label='Display Name'
            name='displayName'
            value={this.state.displayName}
            placeholder='Enter a display name for this message'
            handleInputChange={this.handleInputChange}
          />

          <FormTextArea 
            label='Message'
            name='message'
            value={this.state.message}
            placeholder='Enter a message'
            handleInputChange={this.handleInputChange}
          />

          <Button
            className='SubmitButton'
            type='submit'
            onClick={this.handleFormSubmit}
          >Submit Post</Button>
        </Form>
      </Container>
    )
  }
}

const ConnectedAddMessage = connect(null, mapDispatchToProps)(AddMessage);

export default ConnectedAddMessage;