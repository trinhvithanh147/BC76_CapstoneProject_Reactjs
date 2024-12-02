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
    <div className="flex inputSearchSection ">
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onKeyDown={handleKeyDown}
        onSearch={handleSearch}
        className="lg:w-[616px] lg:h-[60px] md:w-[408px] md:h-[52px] w-[328px] h-[52px] rounded-xl text-base !text-inherit !bg-white border border-solid !border-[#c5c6c9] font-bold leading-6"
      />
      <Button
        className="lg:!w-[48px]  lg:h-[48px] !w-[40px] h-[40px] md:!w-[40px] md:h-[40px]   rounded-lg bg-[#003912] text-white"
        onClick={() => handleSearch(value)}
        icon={<SearchOutlined />}
      />
    </div>
  );
};

export default InputSearchSection
