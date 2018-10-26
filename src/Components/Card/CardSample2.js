import React, { Component } from 'react';
import {MdKeyboardArrowRight} from 'react-icons/lib/md';
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';

let arrowDirection = <MdKeyboardArrowRight />

class CardSample2 extends Component {
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
                        <h3 className="card__top-title">Sample card two
                            <p className="card__top-title-caption">Some text goes here...</p>
                        </h3>
                        <div className="card__top-visual">
                            <div className="datavis">
                                <div className="datavis__container">
                                    <div className="datavis__data">000001010100011101010 <span className="datavis__data-small"></span></div>
                                    <label className="datavis__label">Sneaky sample card two</label>
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

export default CardSample2;