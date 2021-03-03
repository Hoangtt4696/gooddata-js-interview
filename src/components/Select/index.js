import React, { useMemo } from "react";
import PropTypes from "prop-types";

const _getProps = (props) => {
  const originalProps = ["defaultValue", "value", "onChange", "placeholder"];

  return originalProps.reduce(
    (propResults, prop) =>
      props.hasOwnProperty(prop)
        ? { ...propResults, [prop]: props[prop] }
        : propResults,
    {}
  );
};

const Select = (props) => {
  const { options } = props;
  const selectOptions = useMemo(() => {
    if (!options || !Array.isArray(options) || !options.length) {
      return null;
    }

    return options.map(({ value, label }) => (
      <option key={value} value={value}>{label}</option>
    ));
  }, [options]);

  return <select {..._getProps(props)}>{selectOptions}</select>;
};

Select.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
Select.defaultProps = {};

export default Select;
