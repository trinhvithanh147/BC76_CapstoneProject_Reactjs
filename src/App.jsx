import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext, Suspense } from "react";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import DetailJob from "./templates/HomeTemplate/components/DetailJob";
import DetailJobId from "./templates/HomeTemplate/components/DetailJobId";
import SignIn from "./pages/signIn/SignIn";
// import AdminLogin from "./pages/AdminLogin/AdminLogin";
// import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
// import ManagerUser from "./pages/ManagerUser/ManagerUser";
// import ManagerJob from "./pages/ManagerJob/ManagerJob";
// import ManagerDetailJob from "./pages/ManagerDetailJob/ManagerDetailJob";
// import ManagerComment from "./pages/ManagerComment/ManagerComment";

//REACT LAZY (Component nào hiển thị -> Component đó được xử lý & tải lên)
const AdminLogin = React.lazy(() => import("./pages/AdminLogin/AdminLogin"));
const AdminTemplate = React.lazy(() =>
  import("./templates/AdminTemplate/AdminTemplate")
);
const ManagerUser = React.lazy(() => import("./pages/ManagerUser/ManagerUser"));
const ManagerJob = React.lazy(() => import("./pages/ManagerJob/ManagerJob"));
// const ManagerDetailJob = React.lazy(() =>
//   import("./pages/ManagerDetailJob/ManagerDetailJob")
// );
const ManagerComment = React.lazy(() =>
  import("./pages/ManagerComment/ManagerComment")
);

export const NotificationContext = createContext();

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: <HomeTemplate />,
  },
  {
    path: "detail/:slug",
    element: <DetailJob />,
  },
  {
    path: "detail/:slug/:id",
    element: <DetailJobId />,
  },
  {
    path: pathDefault.signIn,
    element: <SignIn />,
  },
  {
    path: pathDefault.adminLogin,
    element: (
      <Suspense fallback={<div>Vui lòng chờ trong giây lát</div>}>
        <AdminLogin />
      </Suspense>
    ),
  },
  {
    path: pathDefault.admin,
    element: (
      <Suspense fallback={<div>Vui lòng chờ trong giây lát</div>}>
        <AdminTemplate />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Vui lòng chờ trong giây lát</div>}>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-user",
        element: (
          <Suspense fallback={<div>Vui lòng chờ trong giây lát</div>}>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-job",
        element: (
          <Suspense fallback={<div>Vui lòng chờ trong giây lát</div>}>
            <ManagerJob />
          </Suspense>
        ),
      },

      {
        path: "manager-comment",
        element: (
          <Suspense fallback={<div>Vui lòng chờ trong giây lát</div>}>
            <ManagerComment />
          </Suspense>
        ),
      },
    ],
  },
];
function App() {
  const routes = useRoutes(arrRoutes);
  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    // toast.error || toast.success || toast.warning || toast.info
  };

  return (
    <>
      <NotificationContext.Provider value={handleNotification}>
        {routes}
        <ToastContainer />
      </NotificationContext.Provider>
    </>
  );
}

export default App;
