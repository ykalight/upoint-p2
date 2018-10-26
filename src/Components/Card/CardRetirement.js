import React, { Component } from 'react';
import $ from 'jquery';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/lib/md';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';
import Detail401kChart from '../Content/Detail401kChart';
//import scrollToComponent from 'react-scroll-to-component';

let arrowDirection = <MdKeyboardArrowDown />,
cardtopStyle = {
    cursor: 'pointer'
}

class CardItem extends Component {
    constructor(props) {
        super(props);
        this._toggleDiv = this._toggleDiv.bind(this);
        this.state = { 
            visible: 'panel',
            active: 'card'
        };
    }

    // scrollTo() {
    //     scrollToComponent(this.HeaderBar, { offset: -120, align: 'top', duration: 500})
    // }

    _toggleDiv() {
        $(this.refs['toggle-div']).slideToggle();
        this.setState(
            { 
                active: this.state.active === 'card'? 'card card--active' : 'card'
            }
        );
        this.state.active === 'card' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>

        //this.scrollTo()
    }

    componentWillMount(){
        this.state.active === 'card card--active' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
    }

    render() {

        return (
        <FadeIn>
        {this.props.showpin && (<Pin classname="cardpin" />)}
        <div className={this.state.active} > 
            <div className="card__top" onClick={this._toggleDiv} style={cardtopStyle}>
                <div className="card__top-icon">
                    <div></div>
                </div>
                <h3 className="card__top-title">Retirement accounts
                    <p className="card__top-title-caption">as of August 31, 2018</p>
                </h3>
                <div className="card__top-visual">
                    <div id="tempGraph_00"></div>
                </div>
                <div className="card__top-arrow">
                    {arrowDirection}
                </div>
            </div>
            
            <div className="card__panel" ref="toggle-div">
                <div>
                    <Detail401kChart />
                </div>
            </div>

        </div>
        </FadeIn>
        );
    }
}

export default CardItem;