
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import MainCards from './components/mainCards'
import Notifications from './data';

function App() {
  const [notification, setNotification] = useState(Notifications.length);
  const [allState, setAllState] = useState(true)
  
  const handleSetAllAsRead = () => {
    setAllState(!allState);
    if(allState) {
      setNotification(0)
    } else {
      setNotification(7)
    }
    
  };

  
  const handleNotificationClick = (id) => {
    const clickedNotification = Notifications.find((notification) => notification.id === id);
  
    if (clickedNotification) {
      clickedNotification.unreadState = !clickedNotification.unreadState;
  
      const unreadCount = Notifications.filter((notification) => notification.unreadState).length;
      setNotification(unreadCount);
    }
  };

 

  return (
    <>
      <Header 
      notification={notification}
      handleSetAllAsRead={handleSetAllAsRead}
      allState={allState}
      />
      <MainCards 
      handleNotificationClick={handleNotificationClick}
      allState={allState}
      
      
      />
    </>
  )
}

export default App

