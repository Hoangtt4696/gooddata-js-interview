import React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  const { label } = props;

  if (label) {
    return <h1>{label}</h1>;
  }

  return <p>{props.children}</p>;
};

Title.propTypes = {
  label: PropTypes.string,
};

export default Title;
