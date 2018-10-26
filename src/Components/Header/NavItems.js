import React, { Component } from 'react';
import uuid from 'uuid';
import {MdKeyboardArrowDown, MdKeyboardArrowRight, MdClose} from 'react-icons/lib/md';
import More from './More';
import MediaQuery from 'react-responsive';
import ReactTimeout from 'react-timeout'

let divStyle={
    width: '100%',
    left: '0',
    position: 'absolute'
}, mnavCloseStyle ={
    width:'30px',
    height: '30px',
    float: 'right',
    margin: '4px 8px 28px 8px',
    cursor: 'pointer'
}, outAnim = {
      opacity: 0, 
      transition: '0.4s',
      left: '-300px'
  };

class NavItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
            wayoutAnim: null
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.toggleShowMobile = this.toggleShowMobile.bind(this);
        this.hide = this.hide.bind(this);
    }

    toggleShow(e){
        this.setState({show: !this.state.show});
        e.preventDefault();
    }

    toggleShowMobile(e){
        if(this.state.show){
            this.setState({wayoutAnim: outAnim});
            this.trueHide();
        } else {
          this.setState({show: true, wayoutAnim: null});
        }
        e.preventDefault();
    }

    trueHide = () => {
        this.props.setTimeout(
          function() {
            this.setState({show: false})
          }
          .bind(this), 400);
    }
    
    hide(e){
        if(this.state.show){
            if(e && e.relatedTarget){
            e.relatedTarget.click();
            }
            this.setState({show: false, txt: ""});
            e.preventDefault();
        }
    }

    scrollToTop() {
        window.scrollTo(0,0);
    }

    render() {

        let more_links;
        
        if(this.props.nav.title === "More"){

            more_links = this.props.nav.links.map(morelink => {
                return (
                    <More key={uuid.v4()} morelink={morelink} />
                )
            });

            return (
                <li>
                    <MediaQuery minWidth={741}> 
                    <a href={this.props.nav.destination} onClick={this.toggleShow}>{this.props.nav.title} <MdKeyboardArrowDown style={{width: '18px', height: '18px'}} /></a>
                    {this.state.show && (
                        <div style={divStyle}>
                            <ul>{more_links}</ul>
                        </div>
                    )}
                    </MediaQuery>

                    <MediaQuery maxWidth={740}>
                        <a href={this.props.nav.destination} onClick={this.toggleShowMobile}>{this.props.nav.title} <MdKeyboardArrowRight style={{width: '18px', height: '18px'}} /></a>
                        {this.state.show && (
                            <div style={this.state.wayoutAnim} className="mnav-more">
                                <div style={{marginBottom:'18px'}}><MdClose className="mnav-more-close" style={mnavCloseStyle} onClick={this.toggleShowMobile} /></div>
                                <ul>{more_links}</ul>
                            </div>
                        )}
                    </MediaQuery>
                </li>
            ) 
        } else {
            return (
                <li><a href={this.props.nav.destination}>{this.props.nav.title}</a></li>
            );
        }
    }
}

// export default NavItems;
export default ReactTimeout(NavItems)