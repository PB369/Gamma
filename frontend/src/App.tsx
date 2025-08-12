import './App.scss'
import { Navigate, Route, Routes } from "react-router-dom"
import Welcome from "./Pages/WelcomePage/WelcomePage"
import type { JSX } from 'react';
import { useAuth } from './contexts/auth/useAuth';
import WelcomeLayout from './layouts/WelcomeLayout';
import AppLayout from './layouts/AppLayout/AppLayout';
import Authentication from './Pages/AuthenticationPage/Authentication';
import DashboardLayout from './layouts/DashboardLayout';
import NotFound from './Pages/NotFoundPage/NotFoundPage';
import WidgetsList from './components/WidgetsList/WidgetsList';
import Chat from './Pages/App/ChatPage/Chat';
import Playlist from './Pages/App/PlaylistPage/PlaylistPage';
import Email from './Pages/App/EmailPage/Email';
import Calendar from './Pages/App/CalendarPage/CalendarPage';
import Settings from './Pages/App/SettingsPage/SettingsPage';

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
