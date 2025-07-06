import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/App/Dashboard/Dashboard";

const DashboardLayout = () => (
  <div className="dashboardLayout">
    <Outlet/>
    <Dashboard/>
  </div>
);

export default DashboardLayout;
