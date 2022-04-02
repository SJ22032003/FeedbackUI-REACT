import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={`card ${props.reverse && "reverse"} `}>
      {props.children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired,
};
export default Card;
