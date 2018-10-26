import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import articles from '../../data/test_articles';
import FlipMove from 'react-flip-move';
import PinQuick from '../Utility/PinQuick';
import {Link} from 'react-router-dom';

class ListItem extends Component {
  render() {
    const style = { zIndex: 100 - this.props.index, position: 'relative'};
    return (
      <div style={style} className="flipitem">
        <div className="quicklinkItem">
            {this.props.showpin && (<PinQuick classname='pinz' onClickToFirst={this.props.clickHandler1} onClickToLast={this.props.clickHandler2} />)}
           
            <Link to={this.props.destination}>
                <div className={`ficon-${this.props.icon} upoint-ficon ql`}></div>
                <label>{this.props.title}</label>
            </Link>
        </div>
      </div>
    );
  }
};


class Shuffle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpin: null,
      removedArticles: [],
      sortingMethod: 'chronological',
      enterAnimation: 'elevator',
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

          <FlipMove className="flipwrap"
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

export default Shuffle;