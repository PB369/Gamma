import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/App/DashboardPage/DashboardPage";

const DashboardLayout = () => (
  <div className="dashboardLayout">
    <Outlet/>
    <Dashboard/>
  </div>
);

export default DashboardLayout;
