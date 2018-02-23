import React from 'react';
import ReviewEntry from './ReviewEntry';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'test',
    };
  }
  render() {
    return (
      <div><ReviewEntry /></div>
    );
  }
}

export default Review;
