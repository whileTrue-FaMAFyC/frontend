import {Outlet, Navigate} from "react-router-dom";

const Public = () => {
  const user = localStorage.getItem("user");

  if (user) return <Navigate to='/home' />;

  return <Outlet />;
};
export default Public;
