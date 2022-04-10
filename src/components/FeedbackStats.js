import React from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats(props) {
  const { feedback } = useContext(FeedbackContext);
  //Calculate Rating Average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  if (feedback.length === 0) {
    return;
  }

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {average.toFixed(1)}</h4>
    </div>
  );
}

export default FeedbackStats;
