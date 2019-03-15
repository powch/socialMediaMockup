import React, { Component } from 'react'
import { Container, Form } from 'reactstrap';
import { FormInput, FormTextArea } from '../../components/Form/'

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

  render() {
    return (
      <Container>
        <h3>Add a Chat</h3>
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
        </Form>
      </Container>
    )
  }
}

export default AddMessage;
