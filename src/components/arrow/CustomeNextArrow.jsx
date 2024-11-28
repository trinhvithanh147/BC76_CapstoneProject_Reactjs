import { RightOutlined } from '@ant-design/icons';
import React from 'react'

const CustomeNextArrow = ({ className, onClick }) => {
  return (
    <div
      className={className}
      style={{
        display: "block",
        zIndex: 1,
        
      }}
      onClick={onClick}
    >
      <RightOutlined style={{ fontSize: "16px", color: "#333" }} />
    </div>
  );
};

export default CustomeNextArrow
