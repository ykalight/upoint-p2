import React, { Component } from 'react';
import $ from 'jquery';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/lib/md';
import DetailRenderer from '../Content/DetailRenderer';
import ActionItem from '../Content/ActionItem';
import uuid from 'uuid';
import FadeIn from 'react-fade-in';

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
            active: 'card',
            detailpieces: this.props.card.expand
        };
    }

    _toggleDiv() {
        $(this.refs['toggle-div']).slideToggle();
        this.setState(
            { 
                active: this.state.active === 'card'? 'card card--active' : 'card'
            }
        );
        this.state.active === 'card' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
    }

    componentWillMount(){
        this.state.active === 'card card--active' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
    }

    render() {
        // Iterate action itmes
        let actionItems;
            if(this.state.detailpieces){
                actionItems = this.state.detailpieces.actions.map(action => {
                    return (
                    <ActionItem key={uuid.v4()} action={action} />
                    )
                });
            }

        return (
        <FadeIn>
        <div className={this.state.active} > 
            <div className="card__top" onClick={this._toggleDiv} style={cardtopStyle}>
                <div className="card__top-icon">
                    <div className={this.props.card.icon !== '' ?  this.props.card.icon : ''}></div>
                </div>
                <h3 className="card__top-title">{this.props.card.title}</h3>
                <div className="card__top-visual">
                    <div id={this.props.card.visual !== '' ?  this.props.card.visual : ''}></div>
                </div>
                <div className="card__top-arrow">
                    {arrowDirection}
                </div>
            </div>
            
            <div className="card__panel" ref="toggle-div">
                <DetailRenderer 
                    title={this.state.detailpieces.title}
                    visual={this.state.detailpieces.visual}
                />
                <div className="relatedAction" >{actionItems}</div>
            </div>

        </div>
        </FadeIn>
        );
    }
}

export default CardItem;