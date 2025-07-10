import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(()=>{return localStorage.getItem("isSignedIn")==="true"});

  const signIn = () => {
    localStorage.setItem("isSignedIn", "true");
    setIsAuthenticated(true);
  }

  const signOut = () => {
    localStorage.removeItem("isSignedIn");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}