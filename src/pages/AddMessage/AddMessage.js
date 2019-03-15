import React, { Component } from 'react'
import { connect } from 'react-redux';
import addMessage from '../../actions/index';
import { Container, Form, Button } from 'reactstrap';
import { FormInput, FormTextArea } from '../../components/Form/'
import './AddMessage.css';

function mapDispatchToProps(dispatch) {
  return{
    addMessage: message => dispatch(addMessage(message))
  };
}

class AddMessage extends Component {

  state = {
    displayName: '',
    message: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { displayName, message } = this.state;
    this.props.addMessage({ displayName, message });
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
          >Submit</Button>
        </Form>
      </Container>
    )
  }
}

const ConnectedAddMessage = connect(null, mapDispatchToProps)(AddMessage);

export default ConnectedAddMessage;