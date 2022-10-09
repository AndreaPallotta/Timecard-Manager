import NavDrawer from '@/components/NavDrawer';
import Notification from '@/components/Notification';
import NotificationContext from '@/contexts/Notification';
import useNotification from '@/hooks/useNotification';
import routes from '@/services/Routes';
import { app } from '@/utils/env';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

function App() {
  const [, close, notification, setNotification] = useNotification(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = app.name;
    navigate(routes.home);
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      <div className="App">
        <NavDrawer />
        <Notification
          open={notification.open}
          onClose={close}
          message={notification.message}
          severity={notification.severity}
        />
      </div>
    </NotificationContext.Provider>
  );
}

export default App;
