import { Select } from "antd";
import React from "react";

const SelectCustom = ({
  labelContent,
  options,
  handleChange,
  mode,
  touched,
  error,
  value,
}) => {
  return (
    <div>
      <label htmlFor="" className="font-medium mb-1 block">
        {labelContent}
      </label>
      <Select
        options={options}
        onChange={handleChange}
        mode={mode && mode}
        className="w-full"
        value={value}
      />
      {touched && error ? <p className="text-red-500 mt-1">{error}</p> : null}
    </div>
  );
};

export default SelectCustom;
