import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';
import Badge from './Badge';

let bellStyle ={
  position: 'relative',
  width: 'auto',
  cursor: 'pointer',
  transition: '0.4s'
}, bellIconStlye={
  display:'block',
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-5px -7px"
}

class Message extends Component {
  render() {

    return (
        <div className="Head-message" style={bellStyle}>
            <Badge count="8" />
            <a title="Messages" href="http://www.hewittsolutions.com/demopack/premierco_upoint/release_7-4/gmc_home.html" style={bellIconStlye}>&nbsp;</a>
        </div>
    );
  }
}

export default Message;
