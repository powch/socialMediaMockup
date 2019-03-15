import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const MessageList = props => {
  return (
    <ListGroup className="mb-3">
      <ListGroupItem>
        <ListGroupItemHeading>{props.displayName}</ListGroupItemHeading>
        <hr />
        <ListGroupItemText>{props.message}</ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  );
}

export default MessageList;
