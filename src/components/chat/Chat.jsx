import React, { useState } from 'react'
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev)=>prev+e.emoji);
   
  } 

  console.log(text);
  return (
    <div className='chat'>
    <div className="top">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>lorem is random</p>
        </div>
      </div>
      <div className="icons">
        <img src="./phone.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./info.png" alt="" />
      </div>
    </div>
    <div className="center">
      <div className="message own">
        <div className="texts">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam dolores laudantium! Ullam commodi soluta, dolores in error quisquam inventore.</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam dolores laudantium! Ullam commodi soluta, dolores in error quisquam inventore.</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message own">
        <div className="texts">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam dolores laudantium! Ullam commodi soluta, dolores in error quisquam inventore.</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam dolores laudantium! Ullam commodi soluta, dolores in error quisquam inventore.</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message own">
        <div className="texts">
          <img src="data:image/jpeg;base64,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" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam dolores laudantium! Ullam commodi soluta, dolores in error quisquam inventore.</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam dolores laudantium! Ullam commodi soluta, dolores in error quisquam inventore.</p>
          <span>1 min ago</span>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="icons">
        <img src="./img.png" alt="" />
        <img src="./camera.png" alt="" />
        <img src="./mic.png" alt="" />
      </div>
        <input type="text" value={text} placeholder='Type a message...' onChange={(e)=>setText(e.target.value)} />
        <div className="emoji">
          {
            open?
            <img src="./cancel.jpeg" onClick={()=>setOpen((prev)=>!prev)} alt="" />
            :
            <img src="./emoji.png" onClick={()=>setOpen((prev)=>!prev)} alt="" />
          }
          <div className="picker">
          <EmojiPicker   open={open} width={280}  height={350} onEmojiClick={handleEmoji}/>
          </div>
        </div>
      <button className="sendButton"> Send </button>
    </div>
    </div>
  )
}

export default Chat
