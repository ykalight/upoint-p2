import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';
import {Link} from 'react-router-dom'; 

let chatStyle ={
  width: 'auto',
  transition: '0.4s'
}, chatIconStlye={
  display:'block',
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-508px -407px"
}

class Chat extends Component {

  render() {

    return (
        <div className="Head-chat" style={chatStyle}>
            <Link title="Chat" to="#" style={chatIconStlye}></Link>
        </div>
    );
  }
}

export default Chat;
