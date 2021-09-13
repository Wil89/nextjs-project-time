import { createContext, useState, useEffect } from "react";

const initialState = {
  notification: null, // {title, message, status}
  showNotification: (notificationData) => {},
  hideNotification: () => {},
};
export const NotificationContext = createContext(initialState);

export const NotificationContextProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  const showNotification = (notificationData) => {
    setNotification(notificationData);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  const value = {
    notification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
