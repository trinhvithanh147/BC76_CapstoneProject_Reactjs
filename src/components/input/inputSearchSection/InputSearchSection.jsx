import { Button, Input } from 'antd'
import React from 'react'
import { SearchOutlined } from "@ant-design/icons";
import './inputSearchSection.scss'
const InputSearchSection = ({
  placeholder,
  value,
  handleChange,
  handleClick,
  handleKeyDown,
  handleSearch,
  className = "",
}) => {
  return (
    <div className="flex inputSearchSection">
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onKeyDown={handleKeyDown}
        onSearch={handleSearch}
        className="w-[616px] h-[60px] rounded-xl text-base !text-inherit !bg-white border border-solid !border-[#c5c6c9] font-medium leading-6"
      />
      <Button
        className="!w-[48px]  h-[48px] rounded-lg bg-[#003912] text-white"
        onClick={() => handleSearch(value)}
        icon={<SearchOutlined />}
      />
    </div>
  );
};

export default InputSearchSection
