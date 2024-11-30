import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextAreaCustom = ({
  labelContent,
  placeholder,
  name,
  id,
  error,
  touched,
  handleBlur,
  handleChange,
  value,
  type = "text",
}) => {
  return (
    <div>
      <label htmlFor="" className="font-medium mb-1 block">
        {labelContent}
      </label>
      <TextArea
        rows={3}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type={type}
      />
    </div>
  );
};

export default TextAreaCustom;
