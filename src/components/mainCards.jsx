import React, { useState } from 'react';
import Notifications from '../data';
// import oval1 from '../assets/images/Oval (1).svg'
// import oval2 from '../assets/images/Oval (2).svg'
// import oval3 from '../assets/images/Oval (3).svg'
// import oval4 from '../assets/images/Oval (4).svg'
// import oval5 from '../assets/images/Oval (5).svg'
// import oval6 from '../assets/images/Oval (6).svg'
// import oval7 from '../assets/images/Oval (7).svg'
// import rectangle1 from '../assets/images/Rectangle.png'
// import oval8 from '../assets/images/Oval (8).svg'

const MainCards = ({allState, handleNotificationClick}) => {


  return (
    <>
   {Notifications.map((notification, id) => {

      
     return (
      <div className={ !notification.unreadState || !allState ? 'mt-6 flex  gap-3 py-2 px-2' : 'mt-6 flex gap-3 py-2 px-2 border bg-[#f7fafd] rounded-[.5rem] shadow-sm '} key={id} 
      onClick={() => handleNotificationClick(notification.id)}
      >
        <div><img src={notification.img} alt="" /></div>

        <div className='w-full'>
         <div className='flex items-center gap-2 .message-content'>
           <h5 className='text-left'>{notification.message.includes(notification.boldText) && (notification.boldText1) ? (<p>{notification.message.split(notification.boldText)[0]}<strong className='text-[#5e6778]'> {notification.boldText}</strong>
            {notification.message.split(notification.boldText)[1]}</p>) : (notification.message)} 

            
            </h5> 
           
            {notification.img2 && ( <img src={notification.img2} alt="" className='w-8 h-8 ' />)}
            </div>
            {notification.reactionMed && <div style={{display: !notification.unreadState || !allState ? 'block' : 'none'}} className='mt-2' >
               <p className='text-[1rem]  border  border-blue-600 rounded-[.6rem] py-2 text-left px-2'>{notification.boldText}</p>
               <p className='mr-[17rem] sm:mr-[38rem] lg:mr-[70rem] mt-[-.7rem] text-[1.2rem]'>{notification.reactionMed}</p></div>}
           {notification.reactionMes && <p className='text-left text-[1rem]  border border-blue-600 rounded-[.4rem] py-2 px-2 mt-2' style={{display: !notification.unreadState || !allState ? 'block' : 'none'}} >{notification.reactionMes}</p>}
           {notification.readMessage && (
            <div className={!notification.unreadState || !allState ? ' border  border-blue-600 rounded-[.4rem] mt-2 px-3 py-3' : ''}>
             <p className='text-left'style={{display: !notification.unreadState || !allState ? 'block' : 'none'}}>{notification.readMessage}</p>
            </div>
           )}
          
           <p className='text-left text-[#939cad]'>{notification.time}</p>
        </div>
    </div>
     )  




   })}
   
    
    </>
  )
}

export default MainCards;