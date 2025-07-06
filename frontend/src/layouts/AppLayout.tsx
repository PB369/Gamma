import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const AppLayout = () => (
  <div className="appLayout">
    <Sidebar/>
    <main>
      <Outlet/>
    </main>
  </div>
);

export default AppLayout;
