import {Outlet, Navigate} from "react-router-dom";

const Private = () => {
  const user = localStorage.getItem("user");

  if (!user) return <Navigate to='/' />;

  return <Outlet />;
};
export default Private;
