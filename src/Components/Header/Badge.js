import React, { Component } from 'react';

let badgeStyle ={
  minWidth: '20px',
  maxWidth: '80px',
  height: '20px',
  position: 'absolute',
  top: '4px',
  right: '2px'
}

class Badge extends Component {
  render() {

    return (
        <div className="badge" style={badgeStyle}>
            {this.props.count}
        </div>
    );
  }
}

export default Badge;
