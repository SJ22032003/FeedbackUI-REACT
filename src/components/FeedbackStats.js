import React from "react";
import PropTypes from "prop-types";

function FeedbackStats(props) {
  //Calculate Rating Average
  let average =
    props.feedbackStats.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / props.feedbackStats.length;

  if (props.feedbackStats.length === 0) {
    return;
  }

  return (
    <div className="feedback-stats">
      <h4>{props.feedbackStats.length} Reviews</h4>
      <h4>Average Rating : {average.toFixed(1)}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbackStats: PropTypes.array.isRequired,
};

export default FeedbackStats;
