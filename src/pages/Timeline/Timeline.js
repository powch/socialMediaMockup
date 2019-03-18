import React from 'react';
import { Container } from 'reactstrap';
import MessageList from '../../components/MessageList';

const Timeline = props => {
  return (
    <Container>
      <h3>Timeline</h3>
      <hr />
      {/* Map messages from app state to MessageList component */}
      {props.messages
        .map((message, idx) => (
          <MessageList
            key={idx}
            id={idx}
            displayName={message.displayName}
            message={message.message}
            time={message.time}
            likes={message.likes}
            likesUp={props.likesUp}
            dislikes={message.dislikes}
            dislikesUp={props.dislikesUp}
          />
        ))
        // Reverse mapped array to act more inline with Twitter's "newest tweet first" display.
        .reverse()}
    </Container>
  );
};

export default Timeline;
