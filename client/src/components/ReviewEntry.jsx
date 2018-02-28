import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import NoStars from './NoStars';
import Avatar from './Avatar';

const ReviewEntry = ({
  data,
}) => {
  const stars = [];
  let count = data.rating;
  for (let i = 0; i < 5; i += 1) {
    if (count !== 0) {
      stars.push(<Stars />);
      count -= 1;
    } else {
      stars.push(<NoStars />);
    }
  }
  return (
    <table id="table">
      <tbody id="tbody">
        <tr>
          <td><Avatar /></td>
          <td id="username">{data.username}</td>
        </tr>
        <tr>
          <td id="star">{stars}</td>
          <td id="reviewTitle">{data.reviewTitle}</td>
        </tr>
        <tr>
          <td id="data" colSpan="2">{data.reviewDate}</td>
        </tr>
        <tr>
          <td id="purchased" colSpan="2">{(data.purchased) ? 'Verified Purchase' : ''} </td>
        </tr>
        <tr>
          <td colSpan="2">{data.comment} </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ReviewEntry;

ReviewEntry.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewTitle: PropTypes.string.isRequired,
    reviewDate: PropTypes.string.isRequired,
    purchased: PropTypes.bool.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};
