import './App.scss'
import { Navigate, Route, Routes } from "react-router-dom"
import Welcome from "./Pages/Welcome/Welcome"
import type { JSX } from 'react';
import { useAuth } from './contexts/auth/useAuth';
import WelcomeLayout from './layouts/WelcomeLayout';
import AppLayout from './layouts/AppLayout/AppLayout';
import Authentication from './Pages/Authentication/Authentication';
import DashboardLayout from './layouts/DashboardLayout';
import NotFound from './Pages/NotFound/NotFound';
import WidgetsList from './components/WidgetsList/WidgetsList';

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
      <Route element={<PublicRoute><WelcomeLayout /></PublicRoute>}>
        <Route path="/" element={<Welcome />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
      <Route path='/app'
        element={
            <ProtectedRoute>
              <AppLayout/>
            </ProtectedRoute>
        }
      >
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={null} />
          <Route path="widgets" element={<WidgetsList/>} />
        </Route>
        {/* Outras rotas do app aqui */}
      </Route>
      <Route element={<WelcomeLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
