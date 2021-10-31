import React from "react";

import PropTypes from "prop-types";

const Button = ({ text, onClick, color }) => {
  return (
    <button onClick={onClick} className="btn" style={{ color: color }}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
