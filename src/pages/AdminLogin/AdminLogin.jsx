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
import useViewPort from "../../hooks/useViewPort";
import { useEffect } from "react";
const AdminLogin = () => {
  const { width } = useViewPort();
  const navigate = useNavigate();

  useEffect(() => {
    const dataString = localStorage.getItem("userInfo"); //string | null
    if (dataString) {
      const data = JSON.parse(dataString);
      if (data.user.role == "ADMIN") {
        window.location.href = pathDefault.admin;
      }
    }
  }, []);

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
        authService
          .signIn(values)
          .then((res) => {
            console.log(res);
            if (res.data.content.user.role == "ADMIN") {
              localStorage.setItem(
                "userInfo",
                JSON.stringify(res.data.content)
              );
              // dispatch(handleUpdateUser(res.data.content.user));
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
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:bg-none bg-[url(/adminLogin.png)] bg-no-repeat bg-cover object-cover h-screen w-full">
      {/* LOGIN  */}
      <div className="flex flex-col items-center justify-center  text-white lg:text-black ">
        {/* LOGO & TITLE */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <Link to={pathDefault.homePage}>
            <Icon.logo fill={width >= 1024 ? "black" : "white"} />
          </Link>
          <h1 className="font-bold text-xl">SIGN IN</h1>
        </div>

        {/* FORM  */}
        <form
          action=""
          className="space-y-8 lg:w-full lg:px-40"
          onSubmit={handleSubmit}
        >
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
              className="bg-[#213A65] text-white w-full font-semibold"
              htmlType="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>

      {/* RIGHT IMAGE  */}
      <div className="hidden lg:block">
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
