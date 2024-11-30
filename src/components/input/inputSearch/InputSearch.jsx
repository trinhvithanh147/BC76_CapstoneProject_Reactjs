  import React from 'react'
  import './inputSearch.scss'
  import { Input } from 'antd'

  const InputSearch = ({
    placeholder,
    value,
    handleChange,
    handleClick,
    handleKeyDown,
    handleSearch,
    className="",
  }) => {
    return (
      <Input.Search
        value={value}
        onSearch={handleSearch}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        onChange={handleChange}
        className={className}
        placeholder={placeholder}
      />
    );
  }; 

  export default InputSearch
