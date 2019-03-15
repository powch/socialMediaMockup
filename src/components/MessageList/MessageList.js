import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const MessageList = props => {
  return (
    <ListGroupItem>
      <ListGroupItemHeading>{props.displayName}</ListGroupItemHeading>
      <ListGroupItemText>{props.message}</ListGroupItemText>
    </ListGroupItem>
  );
}

export default MessageList;
