import React, { Component } from 'react';

class Button extends Component {

  render() {

    return (
        <a className={this.props.addclass} href={this.props.destination} onClick={this.props.onClick}>{this.props.label}</a>
    );
  }
}

export default Button;
