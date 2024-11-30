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
import useViewPort from "../../hooks/useViewPort";
import HeaderAdminTemplate from "./components/HeaderAdminTemplate";

const AdminTemplate = () => {
  const { width } = useViewPort();
  // console.log(width);
  const location = useLocation();
  // console.log(location);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // BẢO MẬT PAGE ADMIN
  useEffect(() => {
    // Check đăng nhập
    const dataString = localStorage.getItem("userInfo"); //string | null
    // TH1: Chưa đăng nhập (ko có dữ liệu user trong LS) -> trả về trang đăng nhập của admin
    if (!dataString) {
      window.location.href = pathDefault.adminLogin;
    } else {
      // TH2: Có đăng nhập (có dữ liệu trong LS) -> Check role: role "USER" ko phải "ADMIN" -> trả về trang homePage
      const data = JSON.parse(dataString);
      if (data.user.role !== "ADMIN") {
        window.location.href = pathDefault.homePage;
      }
    }
  }, []);

  return (
    <>
      {width < 1024 ? (
        <>
          <HeaderAdminTemplate />
          <div className="">
            <Outlet />
          </div>
        </>
      ) : (
        <Layout className="h-full">
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            className="pt-5 px-4  sider-content"
          >
            <div
              className={`demo-logo-vertical flex items-center justify-center p-2 mb-4 ${
                collapsed ? "hidden" : "block"
              }`}
            >
              <NavLink to={pathDefault.homePage}>
                <Icon.logo fill="white" />
              </NavLink>
            </div>

            <Menu
              theme="dark"
              style={{ width: "100%" }}
              mode="inline"
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: (
                    <NavLink
                      to={pathDefault.managerUser}
                      className={({ isActive, isPending }) => {
                        return `px-3 rounded-md w-full block ${
                          isActive ||
                          location.pathname == "/admin" ||
                          location.pathname == "/admin/"
                            ? "item-active"
                            : ""
                        }`;
                      }}
                    >
                      <span>Danh sách người dùng</span>
                    </NavLink>
                  ),
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: (
                    <NavLink
                      to={pathDefault.managerJob}
                      className={({ isActive, isPending }) => {
                        return `px-3 rounded-md w-full inline-block ${
                          isActive ? "item-active" : ""
                        }`;
                      }}
                    >
                      <span>Danh sách công việc</span>
                    </NavLink>
                  ),
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: (
                    <NavLink
                      to={pathDefault.managerComment}
                      className={({ isActive, isPending }) => {
                        // console.log(isActive);
                        return `px-3 rounded-md w-full inline-block ${
                          isActive ? "item-active" : ""
                        }`;
                      }}
                    >
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
      )}
    </>
  );
};

export default AdminTemplate;
