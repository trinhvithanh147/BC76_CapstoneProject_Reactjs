import React from "react";
import InputCustom from "../../../components/input/inputCustom/InputCustom";
import SelectCustom from "../../../components/select/selectCustom/SelectCustom";
import { Button } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { loaiCongViecService } from "../../../services/loaiCongViec.service";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import TextAreaCustom from "../../../components/input/textareaCustom/TextAreaCustom";
import { congViecService } from "../../../services/congViec.service";
import { useContext } from "react";
import { NotificationContext } from "../../../App";
import * as Yup from "yup";

const FormAddJob = ({ layDanhSachCongViec, setIsModalOpen }) => {
  const handleNotification = useContext(NotificationContext);
  const [listMaChiTietLoaiCongViec, setListMaChiTietLoaiCongViec] = useState(
    []
  );
  const dataUser = useSelector((state) => state.userSlice);
  const tokenUser = JSON.parse(localStorage.getItem("userInfo")).token;

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: null,
      giaTien: null,
      nguoiTao: dataUser.user.id,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: "",
      moTaNgan: "",
      saoCongViec: null,
    },
    onSubmit: (values) => {
      console.log(values);
      congViecService
        .themCongViec(values, tokenUser)
        .then((res) => {
          console.log(res);
          handleNotification("success", "Thêm mới thành công");
          layDanhSachCongViec();
        })
        .catch((err) => {
          console.log(err);
        });
      layDanhSachCongViec();
      resetForm();
      setIsModalOpen(false);
    },
    validationSchema: Yup.object({
      tenCongViec: Yup.string().required("Vui lòng không bỏ trống"),
      danhGia: Yup.string().required("Vui lòng không bỏ trống"),
      giaTien: Yup.number().required("Vui lòng không bỏ trống"),
      hinhAnh: Yup.string().required("Vui lòng không bỏ trống"),
      moTa: Yup.string().required("Vui lòng không bỏ trống"),
      maChiTietLoaiCongViec: Yup.string().required("Vui lòng không bỏ trống"),
      moTaNgan: Yup.string().required("Vui lòng không bỏ trống"),
      saoCongViec: Yup.number().required("Vui lòng không bỏ trống"),
    }),
  });

  useEffect(() => {
    loaiCongViecService
      .layLoaiCongViec()
      .then((res) => {
        console.log(res);
        setListMaChiTietLoaiCongViec(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <InputCustom
        labelContent={"Tên công việc"}
        placeholder={"Vui lòng nhập tên công việc"}
        id="tenCongViec"
        name="tenCongViec"
        handleChange={handleChange}
        value={values.tenCongViec}
        handleBlur={handleBlur}
        error={errors.tenCongViec}
        touched={touched.tenCongViec}
      />
      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          labelContent={"Đánh giá"}
          placeholder={"Vui lòng nhập đánh giá"}
          type="number"
          id="danhGia"
          name="danhGia"
          handleChange={handleChange}
          value={values.danhGia}
          handleBlur={handleBlur}
          error={errors.danhGia}
          touched={touched.danhGia}
        />
        <InputCustom
          labelContent={"Giá tiền"}
          placeholder={"Vui lòng nhập giá tiền"}
          type="number"
          id="giaTien"
          name="giaTien"
          handleChange={handleChange}
          value={values.giaTien}
          handleBlur={handleBlur}
          error={errors.giaTien}
          touched={touched.giaTien}
        />
      </div>

      <InputCustom
        labelContent={"Hình ảnh"}
        placeholder={"Vui lòng nhập hình ảnh"}
        name="hinhAnh"
        id="giaTien"
        handleChange={handleChange}
        value={values.hinhAnh}
        handleBlur={handleBlur}
        error={errors.hinhAnh}
        touched={touched.hinhAnh}
      />

      <TextAreaCustom
        labelContent="Mô tả"
        placeholder="Vui lòng nhập mô tả công việc"
        id="moTa"
        name="moTa"
        handleChange={handleChange}
        value={values.moTa}
        handleBlur={handleBlur}
        error={errors.moTa}
        touched={touched.moTa}
      />

      <TextAreaCustom
        labelContent={"Mô tả ngắn"}
        placeholder={"Vui lòng nhập mô tả ngắn"}
        id="moTaNgan"
        name="moTaNgan"
        handleChange={handleChange}
        value={values.moTaNgan}
        handleBlur={handleBlur}
        error={errors.moTaNgan}
        touched={touched.moTaNgan}
      />

      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          labelContent={"Sao công việc"}
          placeholder={"Vui lòng nhập sao công việc"}
          type="number"
          id="saoCongViec"
          name="saoCongViec"
          handleChange={handleChange}
          value={values.saoCongViec}
          handleBlur={handleBlur}
          error={errors.saoCongViec}
          touched={touched.saoCongViec}
        />
        <SelectCustom
          labelContent={"Mã chi tiết loại công việc"}
          options={listMaChiTietLoaiCongViec.map((item, index) => {
            return {
              label: item.tenLoaiCongViec,
              value: item.id,
            };
          })}
          handleChange={(value, option) => {
            setFieldValue("maChiTietLoaiCongViec", value);
          }}
          value={values.maChiTietLoaiCongViec}
          touched={touched.maChiTietLoaiCongViec}
          error={errors.maChiTietLoaiCongViec}
        />
      </div>
      <div className="flex justify-end">
        <Button
          htmlType="submit"
          variant="solid"
          className="bg-black text-white"
        >
          Thêm mới
        </Button>
      </div>
    </form>
  );
};

export default FormAddJob;
