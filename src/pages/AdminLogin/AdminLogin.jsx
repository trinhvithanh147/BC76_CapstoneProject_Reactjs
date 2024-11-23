import React, { useContext } from "react";
import Icon from "../../components/Icon";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import InputCustom from "../../components/input/inputCustom/InputCustom";
import { Button } from "antd";
import { useFormik } from "formik";
import Password from "antd/es/input/Password";
import * as Yup from "yup";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNotification = useContext(NotificationContext);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required("Vui lòng không bỏ trống")
          .email("Vui lòng nhập đúng định dạng email"),
        password: Yup.string().required("Vui lòng không bỏ trống"),
      }),
      onSubmit: (values) => {
        console.log(values);
        authService
          .signIn(values)
          .then((res) => {
            console.log(res);
            if (res.data.content.user.role == "ADMIN") {
              localStorage.setItem(
                "userInfo",
                JSON.stringify(res.data.content)
              );
              //   console.log(res.data.content.user);
              //   dispatch(handleUpdateUser(res.data.content.user));
              handleNotification("success", "Đăng nhập thành công", 1500);
              setTimeout(() => {
                navigate(pathDefault.admin);
              }, 1500);
            }
          })
          .catch((err) => {
            // console.log(err.response.data.content);
            handleNotification("error", err.response.data.content);
          });
      },
    });
  return (
    <div className="grid grid-cols-2">
      {/* LOGIN  */}
      <div className="p-60">
        {/* LOGO & TITLE */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <Link to={pathDefault.homePage}>
            <Icon.logo />
          </Link>
          <h1 className="font-bold text-xl">SIGN IN</h1>
        </div>

        {/* FORM  */}
        <form action="" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <InputCustom
              labelContent={"Email"}
              placeholder={"Vui lòng nhập email"}
              id={"email"}
              name={"email"}
              handleChange={handleChange}
              value={values.email}
              handleBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />
          </div>
          <div>
            <InputCustom
              labelContent={"Mật khẩu"}
              placeholder={"Vui lòng nhập mật khẩu"}
              type="password"
              id={"password"}
              name={"password"}
              handleChange={handleChange}
              value={values.password}
              handleBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />
          </div>
          <div>
            <Button
              variant="solid"
              className="bg-[#3A5B22] text-white w-full font-semibold"
              htmlType="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>

      {/* RIGHT IMAGE  */}
      <div>
        <img
          src="/adminLogin.png"
          alt=""
          className="h-screen w-full object-cover rounded-s-3xl"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
