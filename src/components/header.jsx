import React from 'react';

const Header = ({notification, allState, handleSetAllAsRead}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
        <h2><b className='text-xl'>Notifications</b></h2>
        <button className='bg-[#0a327b] px-[.65rem] rounded-[.4rem] text-white'>{notification}</button>
      </div>
      <h4  className='cursor-pointer' onClick={handleSetAllAsRead}>{allState ? 'Mark all as read' : 'Mark all as unread'}</h4>
    </div>
  );
}

export default Header;
