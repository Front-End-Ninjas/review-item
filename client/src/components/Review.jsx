import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

class Review extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
    return (
    <div><ReviewEntry /></div>
    )
	}
}

export default Review;