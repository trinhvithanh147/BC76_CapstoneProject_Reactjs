import React from "react";
import Icon from "../../../components/Icon";
import { FaBars } from "react-icons/fa6";
import { Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import ManagerUser from "../../../pages/ManagerUser/ManagerUser";
import ManagerJob from "../../../pages/ManagerJob/ManagerJob";
import ManagerComment from "../../../pages/ManagerComment/ManagerComment";
import { pathDefault } from "../../../common/path";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const items = [
  {
    key: "1",
    label: (
      <NavLink to={pathDefault.managerUser}>
        <div className=" font-bold text-base flex space-x-2">
          <span>
            <UserOutlined />
          </span>
          <p>Danh sách người dùng</p>
        </div>
      </NavLink>
    ),
  },
  {
    key: "2",
    label: (
      <NavLink to={pathDefault.managerJob}>
        <div className=" font-bold text-base flex space-x-2">
          <span>
            <VideoCameraOutlined />
          </span>
          <p>Danh sách công việc</p>
        </div>
      </NavLink>
    ),
  },
  {
    key: "3",
    label: (
      <NavLink to={pathDefault.managerComment}>
        <div className=" font-bold text-base flex space-x-2">
          <span>
            <UploadOutlined />
          </span>
          <p>Danh sách bình luận</p>
        </div>
      </NavLink>
    ),
  },
];
const HeaderAdminTemplate = () => {
  return (
    <div className="p-6 flex justify-between items-center bg-[#001529]">
      <div>
        <Icon.logo fill="white" />
      </div>
      <div onClick={() => {}}>
        <Dropdown overlayClassName="w-3/4" menu={{ items }} trigger={["click"]}>
          <FaBars size={25} fill="white" />
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderAdminTemplate;
