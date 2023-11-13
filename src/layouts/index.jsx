import { Outlet } from "react-router-dom";
import Header from "../components/header/Index.jsx";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPage;
