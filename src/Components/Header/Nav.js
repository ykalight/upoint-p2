import React, { Component } from 'react';
import uuid from 'uuid';
import nav_directory from '../../data/nav_directory';
import NavItems from './NavItems';
import Profile from './Profile';
import Chat from './Chat';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom'; 


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        navdata: []
    }
  }

  getData(){
    this.setState({
      navdata: nav_directory
    })
  }

  componentWillMount(){
      this.getData();
  }

  render() {

    let navItems;
    navItems = this.state.navdata.map(nav => {
        return (
            <NavItems key={uuid.v4()} nav={nav} />
        )
    });

    return (
        <nav style={{textAlign:'left'}} className={this.props.className}>
            <ul>
                {navItems}
                <MediaQuery maxWidth={740}>
                    {/* // a cannot be inside a...!!! */}
                    <li className="inmobile"><Link to="/blank"><Profile /> <span>My Profile</span></Link></li>
                    <li className="inmobile"><Link to="/blank"><Chat /> <span>Chat</span></Link></li>
                </MediaQuery>
            </ul>
            
        </nav>
    );
  }
}

export default Nav;
