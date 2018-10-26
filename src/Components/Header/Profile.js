import React, { Component } from 'react';
import iconart from '../../img/icon_art.svg';
import ProfileMenu from './ProfileMenu';
import {Link} from 'react-router-dom'; 
import ReactTimeout from 'react-timeout'

let profileStyle ={
  width: 'auto',
  transition: '0.4s'
}, profileIconStlye={
  display:'block',
  height:'54px', width: '54px',
  backgroundImage: `url(${iconart})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "870px",
  backgroundPosition: "-508px -9px"
}, outAnim = {
    opacity: 0, 
    transition: '0.4s',
    right: '-300px'
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        show: false,
        wayoutAnim: null
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.hide = this.hide.bind(this);
  }

  toggleShow(e){
    if(this.state.show){
        this.setState({wayoutAnim: outAnim});
        this.trueHide();
    } else {
      this.setState({show: true, wayoutAnim: null});
    }
    e.preventDefault();
  }

  hide(e){
      if(this.state.show){
        if(e && e.relatedTarget){
          e.relatedTarget.click();
        }
        this.setState({ wayoutAnim: outAnim});
        this.trueHide();
        e.preventDefault();
      }
  }

  trueHide = () => {
      this.props.setTimeout(
        function() {
          this.setState({show: false})
        }
        .bind(this), 400);
  }

  render() {

    return (
        <div className="Head-profile" style={profileStyle}>
            <Link title="My Profile" to="#" style={profileIconStlye} onClick={this.toggleShow} onBlur={this.hide}></Link>
            {this.state.show && (<ProfileMenu onClick={this.toggleShow} style={this.state.wayoutAnim} className='profile-dropdown' />)}
        </div>
    );
  }
}

// export default Profile;
export default ReactTimeout(Profile)
