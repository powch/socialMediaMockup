import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import MessageCard from '../../components/MessageCard';

const mapStateToProps = state => {
  return { messages: state.messages };
};

const Timeline = ({ messages }) => {
  return (
    <Container>
      {messages.map(message =>(
        <MessageCard 
          displayName={message.displayName}
          message={message.message}
        />
      ))}
    </Container>
  )
}

const ConnectedTimeline = connect(mapStateToProps)(Timeline);

export default ConnectedTimeline;
