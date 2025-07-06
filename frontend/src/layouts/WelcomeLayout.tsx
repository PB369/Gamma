import type { ReactNode } from "react";
import BackgroundLights from "../components/BackgroundLights/BackgroundLights";

const WelcomeLayout = ({ children }: { children: ReactNode }) => (
  <>
    <BackgroundLights />
    {children}
  </>
);

export default WelcomeLayout;
