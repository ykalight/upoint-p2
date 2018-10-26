import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class FooterDirSubItem extends Component {

    render() { 
        return (
            <FadeIn transitionDuration="500">
            <li>
                <a href={this.props.link.destination}>{this.props.link.label}</a>
            </li>
            </FadeIn>
        );
    }
}

export default FooterDirSubItem;