import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

const MessageCard = props => {
  return (
    <Card body outline color='secondary'>
      <CardTitle>{props.displayName}</CardTitle>
      <CardBody>{props.message}</CardBody>
    </Card>
  )
}

export default MessageCard;
