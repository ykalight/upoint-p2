import React, { Component } from 'react';
import Button from '../Common/Button';
import uuid from 'uuid';
import RelatedItem from './RelatedItem';
import FadeIn from 'react-fade-in';

class Related extends Component {
  constructor(){
    super();
    this.showNext = this.showNext.bind(this);
    this._showDefault = this._showDefault.bind(this);
    this.state = {
      show: 3,
      shownAll: false,
      btlabel: "More..."
    }
  }

  showNext() {
    let cntall = this.props.relateddata.length,
    cnt = this.state.show + 9;

    if(cnt >= cntall){
      this.setState({show: cnt, shownAll: true, btlabel: "Less..."});
    } else {
      this.setState({show: cnt});
    }
  }

  _showDefault() {
      this.setState(
          { 
            show: 3, shownAll: false, btlabel: "More..."
          }
      );
  }

  scrollToTop() {
      window.scrollTo(0,0);
  }

  preventDefault(e) {
    e.preventDefault();
}


  render() {

    let relatedItems;

    if(this.props.relateddata){
      relatedItems = this.props.relateddata.slice(0, `${this.state.show}`).map(related => {
        return (
          <FadeIn transitionDuration="500">
            {/* 
              Key in the child instead of at parent <FadeIn> throws 'key' warning.
              However, placing key at parent causes entire related to render when 'More...' is clicked.
              Ignore warnng.
            */}
            <RelatedItem key={uuid.v4()} related={related} onClick={this.scrollToTop} />
          </FadeIn>
        )
      });
    }

    return (
        <div className="Related-block">
          <div className="container">

            
            <div className="relatedItems">
              {relatedItems}
            </div>
            

            <div className="more">
              <span onClick={this.state.shownAll ? this._showDefault : this.showNext}>
                <Button addclass="button button--outline" destination="#" onClick={this.preventDefault} label={this.state.btlabel} />
              </span>
            </div>

          </div>
        </div>
    );
  }
}

export default Related;