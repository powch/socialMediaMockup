import React from 'react';
import { connect } from 'react-redux';
import likesUp from '../../actions/likesUp';
import dislikesUp from '../../actions/dislikesUp';
import { Container } from 'reactstrap';
import MessageList from '../../components/MessageList';

const mapStateToProps = state => {
  return { messages: state.messages };
};

const mapDispatchToProps = dispatch => {
  return {
    likesUp: payload => dispatch(likesUp(payload)),
    dislikesUp: payload => dispatch(dislikesUp(payload))
  };
}

const Timeline = ({ messages, likesUp, dislikesUp }) => {
  return (
    <Container>
      <h3>Timeline</h3>
      <hr />
      {/* Map messages from redux to MessageList component */}
      {messages.map((message, idx) => (
          <MessageList
            key={idx}
            id={idx}
            displayName={message.displayName}
            message={message.message}
            time={message.time}
            likes={message.likes}
            likesUp={likesUp}
            dislikes={message.dislikes}
            dislikesUp={dislikesUp}
          />
      ))
        // Reverse mapped array to act more inline with Twitter's "newest tweet first" display.
        .reverse()}
    </Container>
  )
}

const ConnectedTimeline = connect(mapStateToProps, mapDispatchToProps)(Timeline);

export default ConnectedTimeline;
