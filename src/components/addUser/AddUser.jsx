import React from 'react';
import './addUser.css';

const AddUser = () => {
  return (
    <div className='addUser'>
      <form action="">
        <input type="text" placeholder='username' name="username" />
        <button>Search</button>
      </form>
      <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Jane Doe</span>
            </div>
            <button>add User</button>
      </div>
    </div>
  )
}

export default AddUser;
