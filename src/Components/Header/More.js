import React, { Component } from 'react';

class More extends Component {

  render() {

    return (
        <li><a href={this.props.morelink.destination}>{this.props.morelink.label}</a></li>
    );
  }
}

export default More;
