import { LeftOutlined } from '@ant-design/icons';
import React from 'react'

const CustomPrevArrow = ({ className, onClick }) => {
  return (
    <div
      className={className}
      style={{
        display: "block",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <LeftOutlined style={{ fontSize: "16px", color: "#333" }} />
    </div>
  );
};

export default CustomPrevArrow
