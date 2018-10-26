import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import {
    MdNotifications, 
    MdPortrait, 
    MdPeopleOutline,  
    MdAccountBalance,
    MdPermIdentity,
    MdSupervisorAccount,
    MdPermContactCalendar,
    MdDashboard,
    MdCallToAction,
    MdClose
} from 'react-icons/lib/md';

let iconStyle={
    marginRight: '18px',
    width: '20px',
    height: '20px'
}, closeIconStyle ={
    width: '32px',
    height: '32px',
    color:'#555',
    position: 'absolute',
    right:'8px',
    top: '10px',
    cursor:'pointer'
}
class ProfileMenu extends Component {

    scrollToTop() {
        window.scrollTo(0,0);
    }

  render() {

    return (
        <div className={this.props.className} style={this.props.style}>
            <div className="profile-header">
                <div className="profile-name">
                    Patricia Alavrez
                    <div className="profile-log">Last login: MAR 26, 2018, 14:02 ET</div>
                </div>
                
                <Link to="#">Log out</Link>
                <MdClose style={closeIconStyle} onClick={this.props.onClick} />
            </div>
            <div className="profile-blocks">
                <ul>
                    <label>Roles</label>
                    <li><Link to='#'><MdPermIdentity style={iconStyle} onClick={this.scrollToTop} />Employee (current)</Link></li>
                    <li><Link to='#'><MdSupervisorAccount style={iconStyle} onClick={this.scrollToTop} />Manager view</Link></li>
                    <li><Link to='#'><MdPermContactCalendar style={iconStyle} onClick={this.scrollToTop} />HR professsional</Link></li>
                </ul>

                <ul>
                    <label>Accounts</label>
                    <li><Link to='#'><MdCallToAction style={iconStyle} onClick={this.scrollToTop} />Beneficiary for Patricia</Link></li>
                    <li><Link to='#'><MdDashboard style={iconStyle} onClick={this.scrollToTop} />Qualified orders</Link></li>
                </ul>

                <ul>
                    <label>My profile</label>
                    <li><Link to='#'><MdPortrait style={iconStyle} />Personal information</Link></li>
                    <li><Link to='#'><MdNotifications style={iconStyle} />Manage communications</Link></li>
                    <li><Link to='#'><MdPeopleOutline style={iconStyle} />Beneficiaries</Link></li>
                    <li><Link to='#'><MdAccountBalance style={iconStyle} />Financial institutions</Link></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default ProfileMenu;
