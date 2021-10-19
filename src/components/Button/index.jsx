import React from "react";
import PropTypes from "prop-types";

const Button = ({ id, onClick, title, color, borderRadius, borderWidth }) => {
  return (
    <button
      title={title}
      key={id}
      onClick={onClick}
      color={color}
      style={{
        border: `${borderWidth} solid #000`,
        borderRadius: borderRadius,
      }}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
};

export default Button;
