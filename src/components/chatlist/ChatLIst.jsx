import React, { useState } from 'react';
import './chatlist.css';

const ChatLIst = () => {

  const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ?"./minus.png":"./plus.png"} onClick={()=>setAddMode((prev)=>!prev)} alt="" className='add' />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  ) 
}

export default ChatLIst;
