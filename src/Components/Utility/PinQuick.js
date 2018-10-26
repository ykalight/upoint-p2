import React, { Component } from 'react';
import PopoverSoft from './PopoverSoft';
import ReactTimeout from 'react-timeout'

let pinStyle = {
    width:'26px',
    height:'26px',
    position:'absolute',
    cursor:'pointer',
    zIndex:'999'
}

class PinQuick extends Component {
    constructor(){
        super();
        this.state = {
            pinclass: "",
            msgShow: false,
            altText: "Pin as first"
        }
        this._toggle = this._toggle.bind(this);
    }

    _toggle(){
        if(this.state.pinclass === "pinned"){
            this.setState({pinclass: "", msgShow: false, altText: "Pin as first"});
            this.props.onClickToLast()
        } else {
            this.setState({pinclass: "pinned", msgShow: true, altText: "Pinned"});
            this.props.setTimeout(this.clearMsg, 3000);
            this.props.onClickToFirst()
        }
    }

    clearMsg = (e) => {
       this.setState({msgShow: false})
      }


    render() {

        return (
            <div style={pinStyle} title={this.state.altText} alt={this.state.altText}
                className={`${this.state.pinclass} ${this.props.classname} ficon-pin-dark upoint-ficon`} 
                onClick={this._toggle}
            >
                
                {this.state.msgShow && (<PopoverSoft msg="Pinned" />)}
            </div>
        );
    }
}

// export default Pin;
export default ReactTimeout(PinQuick)