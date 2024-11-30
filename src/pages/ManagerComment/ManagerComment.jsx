import { Table } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { binhLuanService } from "../../services/binhLuan.service";
import useViewPort from "../../hooks/useViewPort";

const ManagerComment = () => {
  const { width } = useViewPort();
  const [listBinhLuan, setListBinhLuan] = useState([]);
  useEffect(() => {
    binhLuanService
      .layBinhLuan()
      .then((res) => {
        console.log(res);
        setListBinhLuan(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mã Công Việc",
      dataIndex: "maCongViec",
      key: "maCongViec",
    },
    {
      title: "Mã Người Bình Luận",
      dataIndex: "maNguoiBinhLuan",
      key: "maNguoiBinhLuan",
    },
    {
      title: "Ngày Bình luận",
      dataIndex: "ngayBinhLuan",
      key: "ngayBinhLuan",
    },
    {
      title: "Nội dung",
      dataIndex: "noiDung",
      key: "noiDung",
    },
    {
      title: "Sao Bình Luận",
      dataIndex: "saoBinhLuan",
      key: "saoBinhLuan",
    },
  ];
  return (
    <div className="space-y-3 py-10 lg:py-0 min-h-screen">
      <h1 className="text-center font-bold text-2xl lg:text-3xld">
        Danh sách bình luận
      </h1>
      <Table
        dataSource={listBinhLuan}
        columns={columns}
        scroll={{ x: width > 1024 ? undefined : width }}
      />
      ;
    </div>
  );
};

export default ManagerComment;
