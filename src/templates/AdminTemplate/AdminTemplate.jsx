import React, { useEffect, useState } from "react";
import "./adminTemplate.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import Icon from "../../components/Icon";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { pathDefault } from "../../common/path";

const AdminTemplate = () => {
  const location = useLocation();
  console.log(location);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    // kiểm tra xem người dùng có đăng nhập chưa
    const dataString = localStorage.getItem("userInfo");
    if (!dataString) {
      // nếu chưa đăng nhập thì chuyển hướng về trang login
      window.location.href = pathDefault.adminLogin;
    } else {
      // kiểm tra xem role có phải là admin hay không
      const data = JSON.parse(dataString); //cho nó thành 1 chuỗi để so sánh
      if (data.user.role !== "ADMIN") {
        window.location.href = pathDefault.homePage;
      }
    }
  }, []);
  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="pt-5 px-4 !max-w-[300px] !min-w-[300px] sider-content"
        // style={{
        //   width: "300px",
        //   minWidth: "300px",
        //   maxWidth: "300px",
        // }}
      >
        <div className="demo-logo-vertical flex items-center justify-center p-2 mb-4">
          <NavLink to={pathDefault.homePage}>
            <Icon.logo fill="white" />
          </NavLink>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              label: (
                <NavLink
                  to={pathDefault.managerUser}
                  className={({ isActive, isPending }) => {
                    return `px-3 rounded-md w-full inline-block ${
                      isActive ||
                      location.pathname == "/admin" ||
                      location.pathname == "/admin/"
                        ? "item-active"
                        : ""
                    }`;
                  }}
                >
                  <UserOutlined />
                  <span>Danh sách người dùng</span>
                </NavLink>
              ),
            },
            {
              key: "2",
              label: (
                <NavLink
                  to={pathDefault.managerJob}
                  className={({ isActive, isPending }) => {
                    return `px-3 rounded-md w-full inline-block ${
                      isActive ? "item-active" : ""
                    }`;
                  }}
                >
                  <VideoCameraOutlined />
                  <span>Danh sách công việc</span>
                </NavLink>
              ),
            },
            {
              key: "3",
              label: (
                <NavLink
                  to={pathDefault.managerComment}
                  className={({ isActive, isPending }) => {
                    console.log(isActive);
                    return `px-3 rounded-md w-full inline-block ${
                      isActive ? "item-active" : ""
                    }`;
                  }}
                >
                  <UploadOutlined />
                  <span>Danh sách bình luận</span>
                </NavLink>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
