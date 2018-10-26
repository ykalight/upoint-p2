import React, { Component } from 'react';
import PopoverSoft from './PopoverSoft';
import ReactTimeout from 'react-timeout'

let pinStyle = {
    width:'26px',
    height:'26px',
    position:'absolute',
    right:'4px',
    top:'4px',
    cursor:'pointer',
    zIndex:'999'
}

class Pin extends Component {
    constructor(){
        super();
        this.state = {
            pinclass: "",
            msgShow: false
        }
        this._toggle = this._toggle.bind(this);
    }

    _toggle(){
        // this.setState({pinclass: this.state.pinclass === "pinned" ? "" : "pinned"})
        if(this.state.pinclass === "pinned"){
            this.setState({pinclass: "", msgShow: false});
        } else {
            this.setState({pinclass: "pinned", msgShow: true});
            this.props.setTimeout(this.clearMsg, 3000);
        }
    }

    clearMsg = (e) => {
       this.setState({msgShow: false})
      }


    render() {

        return (
            <div style={pinStyle} title="Pin to Dashboard" 
                className={`${this.state.pinclass} ${this.props.classname} ficon-pin-dark upoint-ficon`} 
                onClick={this._toggle}
            >
                
                {this.state.msgShow && (<PopoverSoft msg="Pinned" />)}
            </div>
        );
    }
}

// export default Pin;
export default ReactTimeout(Pin)