import React, { Component } from 'react';
import language from '../../data/language.js';
import uuid from 'uuid';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowDown, MdAdd} from 'react-icons/lib/md';
import FadeIn from 'react-fade-in';
import MediaQuery from 'react-responsive';

let arrowSize = {fontSize: '1.5em', marginLeft: '6px'}

class LangItem extends Component {
    render() {
        return (
            <FadeIn>
            <li>
                <Link to={this.props.destination}>
                    {this.props.label}
                </Link>
            </li>
            </FadeIn>
        );
    }
};

class LanguageSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsible: false,
            initialShow: 3,
            ulshow: 'none',
            labelClass: "",
            language
        };
    }

    toggleShow(e){
        this.setState({
            ulshow: this.state.ulshow === "none" ? "" : "none",
            labelClass: this.state.labelClass === "" ? "active" : "",
        });
        e.preventDefault();
    }
    
    renderLang() {
        return this.state.language.map( (lang, i) => {
            return (
                <LangItem
                    key={uuid.v4()}
                    destination={lang.destination}
                    label={lang.title}
                    {...lang}
                />
            );
        });
    }

    componentDidMount(){
        this.setState(
            { 
                isCollapsible: this.state.language.length > this.state.initialShow ? true : false
            }
        )
    }

  render() {

    if(this.state.isCollapsible){
        
        return (
            <div>
                <label className={this.state.labelClass} onClick={this.toggleShow.bind(this)} style={{cursor:'pointer'}}>
                    Language 
                    <MediaQuery minWidth={741}>
                        <MdKeyboardArrowDown style={arrowSize} className="expand"/>
                    </MediaQuery>

                    <MediaQuery maxWidth={740}>
                        <MdAdd className="expand"/>
                    </MediaQuery>
                </label>
                <ul style={{display: this.state.ulshow}}>
                    { this.renderLang() }
                </ul>
            </div>
        );
    } else {

        return (
            <div>
                <MediaQuery minWidth={741}>
                    <label>Language</label>
                    <ul>
                        { this.renderLang() }
                    </ul>
                </MediaQuery>

                <MediaQuery maxWidth={740}>
                    <label className={this.state.labelClass} onClick={this.toggleShow.bind(this)} style={{cursor:'pointer'}}>Language <MdAdd className="expand"/></label>
                    <ul style={{display: this.state.ulshow}}>
                        { this.renderLang() }
                    </ul>
                </MediaQuery>
            </div>
        );
    }
    
  }
}

export default LanguageSelect;