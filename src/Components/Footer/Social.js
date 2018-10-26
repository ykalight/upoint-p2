import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Social extends Component {
  render() {

    return (
        <div className="social">
        <label>Stay connected</label>
        <Link to={"#"} title="Facebook"><i className="icon-facebook"></i></Link>
        <Link to={"#"} title="Twitter"><i className="icon-twitter"></i></Link>
        <Link to={"#"} title="LinkedIn"><i className="icon-linkedin"></i></Link>
        <Link to={"#"} title="Google Plus"><i className="icon-googleplus"></i></Link>
        <Link to={"#"} title="Instagram"><i className="icon-instagram"></i></Link>
        <Link to={"#"} title="YouTube"><i className="icon-youtube"></i></Link>
        <Link to={"#"} title="Pinterest"><i className="icon-pinterest"></i></Link>
        </div>
    );
  }
}

export default Social;