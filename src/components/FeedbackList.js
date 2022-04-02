import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
function FeedbackList(props) {
    
  if (!props.feedback || props.feedback.length === 0)
    return <p >No Feedbacks yet!</p>;

  return (
    <div className="feedback-list">
      {props.feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};
export default FeedbackList;
