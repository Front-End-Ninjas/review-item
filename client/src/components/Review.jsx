import React from 'react';
import ReviewEntry from './ReviewEntry';

class Review extends React.Component {  // eslint-disable-line 
//                                         will add in state after- need to store data
  constructor(props) {                  // eslint-disable-line
    super(props);
  }
  render() {
    return (
      <div><ReviewEntry /></div>
    );
  }
}

export default Review;
