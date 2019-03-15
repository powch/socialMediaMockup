import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import MessageList from '../../components/MessageList';

const mapStateToProps = state => {
  return { messages: state.messages };
};

const Timeline = ({ messages }) => {
  return (
    <Container>
      <h3>Timeline</h3>
      <hr />
      {messages.map((message, idx) => (
        <MessageList
          key={idx}
          displayName={message.displayName}
          message={message.message}
        />
      ))}
    </Container>
  )
}

const ConnectedTimeline = connect(mapStateToProps)(Timeline);

export default ConnectedTimeline;
