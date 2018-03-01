import React from 'react';
import $ from 'jquery';
import ReviewEntry from './ReviewEntry';
// import itemData from '../../../dummyData';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        _id: 12,
        username: 'lwhiskin5',
        rating: 4,
        comment: 'This product is flawless. works really well.',
        reviewTitle: 'really good',
        purchased: false,
        reviewDate: '8/20/2017',
      }],
    };
  }

  componentDidMount() {
    this.fetcher(12, (results) => {
      this.setState({
        data: results,
      });
    });
  }

  fetcher(id, callback) {
    $.ajax({
      url: `/item/${id}/reviews`,
      method: 'GET',
      dataType: 'json',
      success: (results) => {
        callback(results);
      },
    });
  }

  render() {
    return (
      <div>{this.state.data.map(item => <ReviewEntry key={item._id} data={item} />)}
      </div>
    );
  }
}

export default Review;
