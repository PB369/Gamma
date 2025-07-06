import BackgroundLights from "../components/BackgroundLights/BackgroundLights";
import { Outlet } from "react-router-dom";

const WelcomeLayout = () => (
  <div className="welcomeLayout">
    <BackgroundLights />
    <Outlet/>
  </div>
);

export default WelcomeLayout;
