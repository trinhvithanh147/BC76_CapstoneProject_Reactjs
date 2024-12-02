import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../../../components/input/inputCustom/InputCustom";
import { DatePicker } from "antd";
import SelectCustom from "../../../../components/select/selectCustom/SelectCustom";
import { Button } from "antd";
import { skillService } from "../../../../services/skill.service";
import { useFormik } from "formik";
import { nguoiDungService } from "../../../../services/nguoiDung.service";
import { NotificationContext } from "../../../../App";
import * as Yup from "yup";
import dayjs from "dayjs";

const FormAddUser = ({ handleCloseModal, layDanhSachNguoiDung }) => {
  const handleNotification = useContext(NotificationContext);
  const [listSkill, setListSkill] = useState([]);
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    values,
    setFieldValue,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng không bỏ trống"),
      email: Yup.string()
        .required("Vui lòng không bỏ trống")
        .email("Vui lòng nhập đúng định dạng email"),
      password: Yup.string().required("Vui lòng không bỏ trống"),
      phone: Yup.string()
        .required("Vui lòng không bỏ trống")
        .matches(
          /^(03\d|05\d|07\d|08\d|09\d)\d{7}$/,
          "Vui lòng nhập đúng định dạng số điện thoại Việt Nam"
        ),
      role: Yup.string().required("Vui lòng không bỏ trống"),
      birthday: Yup.string().required("Vui lòng không bỏ trống"),
      gender: Yup.string().required("Vui lòng chọn một chọn giới tính"),
      skill: Yup.array().min(1, "Vui lòng nhập từ 1 kỹ năng"),
      certification: Yup.array().min(1, "Vui lòng nhập từ 1 kỹ năng"),
    }),
    onSubmit: (values) => {
      console.log(values);
      nguoiDungService
        .themNguoiDung(values)
        .then((res) => {
          console.log(res);
          resetForm();
          handleCloseModal();
          layDanhSachNguoiDung();
          handleNotification("success", "Thêm người dùng thành công");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  useEffect(() => {
    skillService
      .layDanhSachSkill()
      .then((res) => {
        setListSkill(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-3" action="">
      <InputCustom
        id="name"
        name="name"
        value={values.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
        labelContent={"Họ tên"}
        placeholder={"Vui lòng nhập họ tên"}
      />
      <InputCustom
        id="email"
        name="email"
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
        labelContent={"Email"}
        placeholder={"Vui lòng nhập email"}
      />
      <InputCustom
        id="password"
        name="password"
        value={values.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
        type="password"
        labelContent={"Password"}
        placeholder={"Vui lòng nhập password"}
      />

      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          id="phone"
          name="phone"
          value={values.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.phone}
          touched={touched.phone}
          labelContent={"Số điện thoại"}
          placeholder={"Vui lòng nhập sdt"}
        />
        <SelectCustom
          labelContent={"Chức vụ"}
          handleChange={(value, option) => {
            setFieldValue("role", value);
          }}
          options={[
            {
              label: "Admin",
              value: "ADMIN",
            },
            {
              label: "User",
              value: "USER",
            },
          ]}
          touched={touched.role}
          error={errors.role}
          value={values.role}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="font-medium mb-1 block" htmlFor="">
            Ngày sinh
          </label>
          <DatePicker
            className="w-full"
            format="DD-MM-YYYY"
            onChange={(date, dateString) => {
              console.log(dateString);
              setFieldValue("birthday", dateString);
              console.log(date);
            }}
            value={values.birthday ? dayjs(values.birthday) : null}
          />
          {touched.birthday && errors.birthday ? (
            <p className="text-red-500 mt-1">{errors.birthday}</p>
          ) : null}
        </div>
        <SelectCustom
          labelContent={"Giới tính"}
          handleChange={(value, option) => {
            setFieldValue("gender", value);
          }}
          options={[
            {
              label: "Nam",
              value: true,
            },
            {
              label: "Nữ",
              value: false,
            },
          ]}
          touched={touched.gender}
          error={errors.gender}
          value={values.gender}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SelectCustom
          labelContent={"Skills"}
          mode={"tags"}
          options={listSkill.map((item, index) => {
            return {
              label: item.tenSkill,
              value: item.id.toString(),
            };
          })}
          handleChange={(value, option) => {
            setFieldValue("skill", value);
          }}
          touched={touched.skill}
          error={errors.skill}
          value={values.skill}
        />
        <SelectCustom
          labelContent={"Chứng chỉ"}
          mode={"tags"}
          handleChange={(value, option) => {
            setFieldValue("certification", value);
          }}
          touched={touched.certification}
          error={errors.certification}
          value={values.certification}
        />
      </div>
      <div className="text-right">
        <Button
          htmlType="submit"
          variant="solid"
          className="bg-black text-white "
        >
          Xác nhận
        </Button>
      </div>
    </form>
  );
};

export default FormAddUser;
