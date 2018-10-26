import React, { Component } from 'react';
import {MdKeyboardArrowRight} from 'react-icons/lib/md';
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';
import {Motion, StaggeredMotion, spring} from 'react-motion';


let arrowDirection = <MdKeyboardArrowRight />

class CardSample1 extends Component {
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
                        <h3 className="card__top-title">Sample card one
                            <p className="card__top-title-caption">Some text goes here...</p>
                        </h3>
                        <div className="card__top-visual">
                            <div className="datavis">
                                <div className="datavis__container">
                                    <div className="datavis__data">
                                        <Motion defaultStyle={{x: 0}} style={{x: spring(100, {stiffness: 120, damping: 17})}}>
                                            {value => <div>{value.x}</div>}
                                        </Motion>

                                        {/* <StaggeredMotion
                                            defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
                                            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                                                return i === 0
                                                ? {h: spring(100)}
                                                : {h: spring(prevInterpolatedStyles[i - 1].h)}
                                            })}>
                                            {interpolatingStyles =>
                                                <div>
                                                {interpolatingStyles.map((style, i) =>
                                                    <div key={i} style={{border: '3px solid', height: style.h}} />)
                                                }
                                                </div>
                                            }
                                            </StaggeredMotion> */}
                                        <span className="datavis__data-small"></span>
                                    </div>
                                    <label className="datavis__label">Lorem Ipsum</label>
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

export default CardSample1;