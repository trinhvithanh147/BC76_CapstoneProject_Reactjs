import { Dropdown, Space } from 'antd';
import React, { useState } from 'react'
import {DownOutlined} from '@ant-design/icons'

const DropdownHeader = ({buttonContent="Fiverr Pro",item,width}) => {
    const [open,setOpen] = useState(false)
    console.log(open)
  return (
      <Dropdown
      overlayStyle={{width: width}}
        menu={{ items: item }}
        trigger={["click"]}
        open={open}
      >
        <button
          className='font-semibold capitalize py-2 px-4  duration-200 rounded-md'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {buttonContent}
          <DownOutlined
            className={`${open ? "rotate-180" : "rotate-0"} duration-300`}
          />
        </button>
      </Dropdown>
  );
}

export default DropdownHeader
