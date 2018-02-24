import React from 'react';
import ReviewEntry from './ReviewEntry';
import itemData from '../../../dummyData';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: itemData[2].reviews,
    };
  }
  render() {
    return (
      <div>{this.state.data.map(item => <ReviewEntry key={item.username} data={item} />)}
      </div>
    );
  }
}

export default Review;
