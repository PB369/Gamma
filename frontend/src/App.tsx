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
import Chat from './Pages/App/Chat/Chat';
import Playlist from './Pages/App/Playlist/Playlist';
import Email from './Pages/App/Email/Email';
import Calendar from './Pages/App/Calendar/Calendar';
import Settings from './Pages/App/Settings/Settings';

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
        <Route path='chat' element={<Chat/>}/>
        {/* Outras rotas do app aqui */}
        <Route path='playlist' element={<Playlist/>}/>
        <Route path='email' element={<Email/>}/>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='settings' element={<Settings/>}/>
      </Route>
      <Route element={<WelcomeLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
