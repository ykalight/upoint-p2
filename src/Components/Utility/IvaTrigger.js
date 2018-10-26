import React, { Component } from 'react';

let style = {
    position:'fixed',
    right:'0px',
    cursor:'pointer' 
}

class IvaTrigger extends Component {

    render() {

        return (
            <div style={style} className="iva-trigger">
                <span>Need help?</span>
            </div>
        );
    }
}

export default IvaTrigger;