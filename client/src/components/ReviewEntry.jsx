import React from 'react';
import PropTypes from 'prop-types';

const ReviewEntry = ({
  data,
}) => (
  <table id="table">
    <tbody id="tbody">
      <tr>
        <td id="username">{data.username}</td>
      </tr>
      <tr>
        <td id="star">{data.rating} star: </td>
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
