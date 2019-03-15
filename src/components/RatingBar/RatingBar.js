import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const RatingBar = props => {
  return (
    <div>
      <Button 
        className='mr-1'
        onClick={() => props.likesUp(props.id)}
      >
        <FontAwesomeIcon icon={faThumbsUp}/> {props.likes}
      </Button>
      <Button
        onClick={() => props.dislikesUp(props.id)}
      >
        <FontAwesomeIcon icon={faThumbsDown} /> {props.dislikes}
      </Button>
    </div>
  )
}

export default RatingBar;
