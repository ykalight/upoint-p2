import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import articles from '../../data/test_medcards';
import FlipMove from 'react-flip-move';
import PinQuick from '../Utility/PinQuick';
import {Motion, spring} from 'react-motion';

class ListItem extends Component {
  render() {
    const style = { zIndex: 100 - this.props.index, position: 'relative'};
    return (
      <div style={style} className="flipitem">

        
        <div className='card' > 
            {this.props.showpin && (<PinQuick classname='pinz' onClickToFirst={this.props.clickHandler1} onClickToLast={this.props.clickHandler2} />)}

            <div className="card__top card__top--nonexpand">
                <div className="card__top-icon"><div></div></div>
                <h3 className='card__top-title'>{this.props.title}<p className="card__top-title-caption">Some text goes here...</p></h3>
                <div className="card__top-visual">
                    <div className="datavis">
                        <div className="datavis__container">
                            <div className="datavis__data">
                                <Motion defaultStyle={{x: 0}} style={{x: spring(this.props.id, {stiffness: 120, damping: 17})}}>
                                    {value => <div>{value.x}</div>}
                                </Motion>
                                <span className="datavis__data-small"></span>
                            </div>
                            <label className="datavis__label">Test</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
      </div>
    );
  }
};


class ShuffleMed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpin: null,
      removedArticles: [],
      sortingMethod: 'chronological',
      enterAnimation: 'none',
      leaveAnimation: 'none',
      articles
    };
  }

  componentDidMount() {
      this.setState({
          showpin: this.props.showpin
      })
  }


  moveArticle(source, dest, id, first) {
    let sourceArticles = this.state[source].slice();
    let destArticles = this.state[dest].slice();

    if ( !sourceArticles.length ) return;

    // Find the index of the article clicked. If no ID is provided, the index is 0
    const i = id ? sourceArticles.findIndex(article => article.id === id) : 0;

    // If the article is already removed, do nothing.
    if ( i === -1 ) return;

    // Original
    //destArticles = [].concat( sourceArticles.splice(i, 1), destArticles );

    if(first){
      // Remove from current spot, put in first
      sourceArticles = [].concat( sourceArticles.splice(i, 1), sourceArticles );
    } else {
      // Remove from current spot, put in last
      let srcitem;
      srcitem = sourceArticles.splice(i, 1);
      sourceArticles = [].concat( srcitem, sourceArticles );
      sourceArticles.push(...srcitem);
      sourceArticles.shift();
    }

    this.setState({
      [source]: sourceArticles,
      [dest]: destArticles
    });
    
  }

    
  renderArticles() {
    return this.state.articles.slice(0, `${this.props.initialShow}`).map( (article, i) => {
      return (
        <ListItem
          showpin={this.props.showpin}
          key={article.id}
          index={i}
          clickHandler1={throttle(() => this.moveArticle('articles', 'removedArticles', article.id, true), 800)}
          clickHandler2={throttle(() => this.moveArticle('articles', 'removedArticles', article.id), 800)}
          {...article}
        />
      );
    });
  }

  render() {
    return (

          <FlipMove className="flipwrap-med"
            staggerDurationBy="30"
            duration={500}
            enterAnimation={this.state.enterAnimation}
            leaveAnimation={this.state.leaveAnimation}
            typeName="div"
          >
            { this.renderArticles() }

          </FlipMove>

    );
  }
};

export default ShuffleMed;