import React, { useMemo } from "react";
import PropTypes from "prop-types";

const Select = (props) => {
  const { options, defaultValue, value, onChange, placeholder } = props;
  const selectOptions = useMemo(() => {
    if (!Array.isArray(options) || !options.length) {
      return null;
    }

    return options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  }, [options]);

  return (
    <select
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      {selectOptions}
    </select>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
Select.defaultProps = {};

export default Select;
