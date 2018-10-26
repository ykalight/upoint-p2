import React, { Component } from 'react';
import {MdClose} from 'react-icons/lib/md';
import ReactTimeout from 'react-timeout'

let style = {
    display:'block',
    textAlign:'center',
    zIndex: '999999',
    position: 'static',
    width: '100%'
}

class SystemMessage extends Component {

    constructor(props){
        super(props);
        this.state = {
            dismissClass: ""
        }
        this._toggle = this._toggle.bind(this);
    }

    _toggle(){
        this.setState({dismissClass: "dismiss"});
        this.props.setTimeout(this.props.onClick, 500)
    }

    render() {

        return (
            <div className={`${this.state.dismissClass} system-message`} style={style}>
                <div style={{padding:'18px', fontWeight: 'bold'}}>
                    System Messge: Lorem ipsum is not available at the moment.
                    <div className="sysmsg-close" onClick={this._toggle}><MdClose style={{fontSize:'24px', marginRight: '8px'}} />Dismiss</div>
                </div>
            </div>
        );
    }
}

// export default SystemMessage;
export default ReactTimeout(SystemMessage)