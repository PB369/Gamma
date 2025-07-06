import './App.scss'
import { Navigate, Route, Routes } from "react-router-dom"
import Welcome from "./Pages/Welcome/Welcome"
import type { JSX } from 'react';
import { useAuth } from './contexts/auth/useAuth';
import WelcomeLayout from './layouts/WelcomeLayout';
import AppLayout from './layouts/AppLayout';
import Authentication from './Pages/Authentication/Authentication';
import DashboardLayout from './layouts/DashboardLayout';

function App() {

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Navigate to="/app/dashboard" /> : children;
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <WelcomeLayout>
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          </WelcomeLayout>
        } 
      />
      <Route
        path="/authentication"
        element={
          <WelcomeLayout>
            <PublicRoute>
              <Authentication />
            </PublicRoute>
          </WelcomeLayout>
        }
      />
      <Route path='/app'
        element={
            <ProtectedRoute>
              <AppLayout/>
            </ProtectedRoute>
        }
      >
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={null} />
          <Route path="widgets" element={null} />
        </Route>
        {/* Outras rotas do app aqui */}
      </Route>
    </Routes>
  )
}

export default App
