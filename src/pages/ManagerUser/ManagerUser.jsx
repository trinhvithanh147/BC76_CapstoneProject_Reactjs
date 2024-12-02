import React, { useContext, useEffect, useState } from "react";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { Avatar, Button, Modal, Popconfirm, Table, Tag } from "antd";
import { NotificationContext } from "../../App";
import FormAddUser from "./components/FormAddUser/FormAddUser";
import FormUpdateUser from "./components/FormUpdateUser/FormUpdateUser";
import useViewPort from "../../hooks/useViewPort";

const ManagerUser = () => {
  const { width } = useViewPort();
  const handleNotification = useContext(NotificationContext);
  const [listNguoiDung, setListNguoiDung] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const layDanhSachNguoiDung = () => {
    nguoiDungService
      .layDanhSachNguoiDung()
      .then((res) => {
        console.log(res);
        setListNguoiDung(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    layDanhSachNguoiDung();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "4",
      render: (text, record, index) => {
        return text ? (
          <img src={text} className="w-10 h-10" />
        ) : (
          <Avatar size={40}>{record.name[0]}</Avatar>
        );
      },
    },
    {
      title: "Chức vụ",
      dataIndex: "role",
      key: "5",
      render: (text, record, index) => {
        return text == "ADMIN" ? (
          <Tag color="magenta">{text}</Tag>
        ) : text == "USER" ? (
          <Tag color="blue">{text}</Tag>
        ) : text == "" ? (
          <Tag color="purple">CHƯA XÁC ĐỊNH</Tag>
        ) : (
          <Tag color="gold">{text}</Tag>
        );
      },
    },
    {
      title: "Hành động",
      key: "5",
      render: (text, record, index) => {
        return (
          <div className="space-y-2 md:space-y-0 md:space-x-2 lg:space-x-3">
            {/* NÚT SỬA  */}
            <Button
              className="border-yellow-500 text-yellow-500"
              onClick={() => {
                setFormData(record);
                setIsOpenUpdateModal(true);
              }}
            >
              Sửa
            </Button>
            {/* NÚT XOÁ  */}
            <Popconfirm
              title="Thực hiện xóa người dùng"
              description="Bạn có chắc muốn xóa người dùng không?"
              onConfirm={() => {
                nguoiDungService
                  .xoaNguoiDung(record.id)
                  .then((res) => {
                    console.log(res);
                    layDanhSachNguoiDung();
                    handleNotification("success", res.data.message);
                  })
                  .catch((err) => {
                    console.log(err);
                    layDanhSachNguoiDung();
                    handleNotification("error", err.response.data.content);
                  });
              }}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Xoá</Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  console.log(formData);
  return (
    <div className="space-y-3 py-10 lg:py-0 min-h-screen">
      <h1 className="text-center font-bold text-2xl lg:text-3xl ">
        Danh sách người dùng
      </h1>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setTitleModal("Thêm người dùng");
            setFormData({
              id: 0,
              name: "",
              email: "",
              password: "",
              phone: "",
              birthday: "",
              gender: "",
              role: "",
              skill: [],
              certification: [],
            });
          }}
          variant="solid"
          className="bg-green-500 text-white hover:!bg-white hover:!text-green-500 hover:!border-green-500"
          size="large"
        >
          Thêm người dùng
        </Button>
      </div>
      <Table
        dataSource={listNguoiDung}
        columns={columns}
        scroll={{ x: width > 1024 ? undefined : width }}
      />
      <Modal
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
        title="Thêm người dùng mới"
        open={isModalOpen}
      >
        <FormAddUser
          handleCloseModal={() => {
            setIsModalOpen(false);
          }}
          layDanhSachNguoiDung={layDanhSachNguoiDung}
        />
      </Modal>
      <Modal
        onCancel={() => {
          setIsOpenUpdateModal(false);
        }}
        footer={null}
        title="Cập nhật người dùng"
        open={isOpenUpdateModal}
      >
        <FormUpdateUser
          handleCloseModal={() => {
            setIsOpenUpdateModal(false);
          }}
          layDanhSachNguoiDung={layDanhSachNguoiDung}
          formData={formData}
        />
      </Modal>
    </div>
  );
};

export default ManagerUser;
