import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

let style = {
    position:'absolute', 
    top: '3px',
    left: '-90px',
    zIndex:'99'
}
class PopoverSoft extends Component {

    render() {

        return (
            <FadeIn>
            <div className="popover-soft" style={style}>
                <div>{this.props.msg}</div>
            </div>
            </FadeIn>
        );
    }
}

export default PopoverSoft;