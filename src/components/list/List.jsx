import React from 'react';
import './list.css';
import ChatLIst from '../chatlist/ChatLIst';
import UserInfo from '../userInfo/UserInfo';

const List = () => {
  return (
    <div className='list'>
     <UserInfo />
     <ChatLIst />
    </div>
  )
}

export default List
