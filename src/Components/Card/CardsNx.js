import React, { Component } from 'react';
import Button from '../Common/Button';
//import dataQuicklinks from '../../data/quicklinks';
import dataQuicklinks from '../../data/test_articles';
import dataMedCards from '../../data/test_medcards';
import TestFlip from './TestFlip';
import TestFlipMed from './TestFlip_Med';
import scrollToComponent from 'react-scroll-to-component';

import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/lib/md';

let arrowDirection = <MdKeyboardArrowDown />

class CardsNx extends Component {
  constructor(props){
    super(props);
    this.state = {
      editclass: "",
      med_show: 2,
      small_show: 5,
      showall: false,
      showallsmall: false,
      quicklinksdata: [],
      medcardsdata: [],
      btLabel: "More...",
      showpin: false,
      showpinsmall: false
    }
    this._showAll = this._showAll.bind(this);
    this._showDefault = this._showDefault.bind(this);
    this._showQuickAll = this._showQuickAll.bind(this);
    this._showQuickDefault = this._showQuickDefault.bind(this);
  }
  
  getData(){
    this.setState({
        quicklinksdata: dataQuicklinks,
        medcardsdata: dataMedCards
    })
}

scrollTo() {
    scrollToComponent(this.Cardtop, { offset: -120, align: 'top', duration: 500})
  }

  componentWillMount(){
      this.getData();
      this.state.showallsmall ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
  }

  _showAll(e) {
        let cnt = this.state.medcardsdata.length;
        this.setState(
            {med_show: cnt, showall: true, editclass: "active", btLabel: "Less...", showpin: true}
        );
        this.scrollTo()
        e.preventDefault();
    }

  _showDefault(e) {
      this.setState(
          {med_show: 2, showall: false,  editclass: "", btLabel: "More...", showpin: false}
      );
      this.scrollTo()
      e.preventDefault();
  }

  _showQuickAll() {
      let cnt = this.state.quicklinksdata.length;
        this.setState(
            {small_show: cnt, showallsmall: true, showpinsmall: true}
        );
        arrowDirection = <MdKeyboardArrowUp /> 
    }

  _showQuickDefault() {
      this.setState(
          { small_show: 5, showallsmall: false,  showpinsmall: false}
      );
      arrowDirection = <MdKeyboardArrowDown /> 
  }

  render() {

    return (
        <div className={`${this.state.editclass} container card-container`}>

          <div className="ql-container">
            <div className="card quicklinks">
              {/* {quickItems} */}
              <TestFlip showpin={this.state.showpinsmall} initialShow={this.state.small_show}/>
              <div className="quicklinks__trigger" onClick={this.state.showallsmall ? this._showQuickDefault : this._showQuickAll}>{arrowDirection}</div>
            </div>
          </div>
          
          <TestFlipMed showpin={this.state.showpin} initialShow={this.state.med_show} ref={ re => { this.Cardtop = re }}/>
          
          <div className="more">
            <Button addclass="button button--outline" destination="#" isShowAll={this.state.showall} label={this.state.btLabel} onClick={this.state.showall ? this._showDefault : this._showAll} />
          </div>

        </div>
    );
  }
}

export default CardsNx;
