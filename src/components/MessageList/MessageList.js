import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import RatingBar from '../RatingBar';
import './MessageList.css';

const MessageList = props => {
  return (
    <ListGroup className="mb-3">
      <ListGroupItem>
        <ListGroupItemHeading>{props.displayName} <span className='PostTime'> - {props.time}</span></ListGroupItemHeading>
        <ListGroupItemText>{props.message}</ListGroupItemText>
        <RatingBar
          id={props.id}
          likes={props.likes}
          likesUp={props.likesUp}
          dislikes={props.dislikes}
          dislikesUp={props.dislikesUp}
        />
      </ListGroupItem>
    </ListGroup>
  );
}

export default MessageList;
