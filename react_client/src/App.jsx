import NavDrawer from '@/components/NavDrawer';
import Notification from '@/components/Notification';
import NotificationContext from '@/contexts/Notification';
import useNotification from '@/hooks/useNotification';
import { app } from '@/utils/env';
import React, { useEffect } from 'react';

function App() {
  const [, close, notification, setNotification] = useNotification(true);

  useEffect(() => {
    document.title = app.name;
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      <div className='App'>
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
