import React, { Component } from 'react';
import {MdKeyboardArrowRight} from 'react-icons/lib/md';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';

let arrowDirection = <MdKeyboardArrowRight />;

class CardNxItem extends Component {
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
            <a href={this.props.card.nxlink}>
                <div className={this.state.active} > 
                    <div className="card__top card__top--nonexpand">
                        <div className="card_top-icon">
                            <div className={this.props.card.icon !== '' ?  this.props.card.icon : ''}></div>
                        </div>
                        <h3>{this.props.card.title}
                            <p>{this.props.card.text}</p>
                        </h3>
                        <div className="card__top-visual">
                            <div id={this.props.card.visual !== '' ?  this.props.card.visual : ''}></div>
                        </div>
                        <div className="card__top-arrow">
                            <span>{arrowDirection}</span>
                        </div>
                    </div>
                </div>
            </a>
        </FadeIn>
        );
    }
}

export default CardNxItem;