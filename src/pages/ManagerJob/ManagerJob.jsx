import React, { useContext, useEffect, useState } from "react";
import { Button, Popconfirm, Table } from "antd";
import { congViecService } from "../../services/congViec.service";
import { NotificationContext } from "../../App";
import { Modal } from "antd";
import FormAddJob from "./components/FormAddJob";

const ManagerJob = () => {
  const handleNotification = useContext(NotificationContext);
  const [listCongViec, setListCongViec] = useState([]);

  const token = JSON.parse(localStorage.getItem("userInfo")).token;
  const layDanhSachCongViec = () => {
    congViecService
      .layCongViec()
      .then((res) => {
        console.log(res);
        setListCongViec(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachCongViec();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "ID",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => {
        return <img src={text} className="w-10 h-10" alt="" />;
      },
    },
    {
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
      render: (text) => {
        return <span className="">{text}</span>;
      },
    },
    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      key: "giaTien",
    },
    {
      title: "Thao tác",
      key: "thaoTac",
      render: (record) => {
        return (
          <div>
            <Popconfirm
              title="Xoá công việc"
              description="Bạn có chắc muốn xoá công việc này"
              onConfirm={() => {
                congViecService
                  .xoaCongViec(record.id, token)
                  .then((res) => {
                    console.log(res);
                    layDanhSachCongViec();
                    handleNotification("success", "Xoá công việc thành công");
                  })
                  .catch((err) => {
                    console.log(err);
                    layDanhSachCongViec();
                    handleNotification("error", err.response.data.content);
                  });
              }}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button className="border-red-500 text-red-500 hover:!bg-red-500 hover:!text-white hover:!border-red-500">
                Xoá
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  // MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="space-y-3 py-10 lg:py-0 min-h-screen">
        <h1 className="px-4 lg:px-0 font-bold text-2xl lg:text-3xl text-center">
          Danh sách công việc
        </h1>
        <div className="flex justify-center">
          <Button
            variant="solid"
            className="bg-green-500 text-white hover:!bg-white hover:!text-green-500 hover:!border-green-500"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Thêm công việc mới
          </Button>
        </div>

        <Table dataSource={listCongViec} columns={columns} />

        <Modal
          title="Thêm công việc mới"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <FormAddJob
            layDanhSachCongViec={layDanhSachCongViec}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      </div>
    </>
  );
};

export default ManagerJob;
