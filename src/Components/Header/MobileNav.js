import React, { Component } from 'react';
import {MdKeyboardArrowLeft, MdMenu} from 'react-icons/lib/md';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Nav from './Nav';

let menuStyle = {
    fontSize: '.6em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    cursor: 'pointer'
},
arrowDownStyle = {width: '28px', height: '28px', display: 'block', margin: '0 auto 7px auto'},
arrowLeftStyle = {width: '36px', height: '36px', display: 'block', margin: 'auto', marginTop: '-6px'},
arrowType = 'down',
drawArrow = <MdMenu style={arrowDownStyle} />;

class MobileNav extends Component {
    constructor(){
        super();
        this.state = {
            isPaneOpenLeft: false
        }
        this._toggler = this._toggler.bind(this);
        this.removemenu = this.removemenu.bind(this);
        this.toggleArrow = this.toggleArrow.bind(this);
        this.resetarrow = this.resetarrow.bind(this);
      }

        _toggler() {
            this.setState(
                {isPaneOpenLeft: this.state.isPaneOpenLeft ? false : true}
            );
            this.toggleArrow()
        }

        toggleArrow() {
            arrowType === 'down' ? arrowType = 'left' : arrowType = 'down';
            arrowType === 'left' ? drawArrow = <MdKeyboardArrowLeft style={arrowLeftStyle} className="mnav-close" /> : drawArrow = <MdMenu style={arrowDownStyle} className="mnav-hamb" />;
        }

        componentDidMount() {
            window.addEventListener('resize', this.removemenu);
            //this.toggleArrow()
        }
        
        componentWillUnmount() {
            window.removeEventListener('resize', this.removemenu);
        }
        
        resetarrow() {
            this.setState({displayclass: ''});
            arrowType = 'down';
            drawArrow = <MdMenu style={arrowDownStyle} />;
        }
        removemenu() {
            // Hide menu on resize
            this.setState({isPaneOpenLeft: false});
            this.resetarrow()
        }

    render() {

        return (
            <div id="mnav" style={menuStyle}>
                <div onClick={this._toggler}>{drawArrow}</div>
                <SlidingPane
                    className='navSlider'
                    overlayClassName='navSliderMask'
                    isOpen={ this.state.isPaneOpenLeft }
                    title=''
                    from='left'
                    width='90%'
                    onRequestClose={ () => this._toggler() }>
                    {/* onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }> */}
                    <Nav />
                </SlidingPane>
            </div>
        );
    }
}

export default MobileNav;