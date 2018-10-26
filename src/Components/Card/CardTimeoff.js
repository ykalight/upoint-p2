import React, { Component } from 'react';
import {MdKeyboardArrowRight} from 'react-icons/lib/md';
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';

let arrowDirection = <MdKeyboardArrowRight />

class CardTimeoff extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: 'card'
        };
    }

    render() {
        return (
        <FadeIn>
            {this.props.showpin && (<Pin classname="cardpin" />)}
            <Link to="/blank">
                <div className={this.state.active}> 
                    <div className="card__top card__top--nonexpand">
                        <div className="card__top-icon">
                            <div></div>
                        </div>
                        <h3 className="card__top-title">Time off
                            <p className="card__top-title-caption">as of August 31, 2018</p>
                        </h3>
                        <div className="card__top-visual">
                            <div className="datavis">
                                <div className="datavis__container">
                                    <div className="datavis__data">58.2 <span className="datavis__data-small">hrs</span></div>
                                    <label className="datavis__label">Non Union - Vacation</label>
                                </div>
                                <div className="datavis__container">
                                    <div className="datavis__data">20.5 <span className="datavis__data-small">hrs</span></div>
                                    <label className="datavis__label">Non Union - Personal Day</label>
                                </div>
                                <div className="datavis__container">
                                    <div className="datavis__data">130.0 <span className="datavis__data-small">hrs</span></div>
                                    <label className="datavis__label">Non Union - Sick/Injury Off the Job</label>
                                </div>
                            </div>
                        </div>
                        <div className="card__top-arrow">
                            <span>{arrowDirection}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
        );
    }
}

export default CardTimeoff;