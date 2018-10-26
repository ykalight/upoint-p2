import React, { Component, PropTypes } from 'react';
import throttle from 'lodash/throttle';
import articles from '../../data/test_articles';
import FlipMove from 'react-flip-move';
import Toggle from './TestToggle.jsx';


class ListItem extends Component {
  render() {
    const listClass = `list-item card ${this.props.view}`;
    const style = { zIndex: 100 - this.props.index };

    return (
      <li id={this.props.id} className={listClass} style={style}>
        <h3>{this.props.name}</h3>
        <button onClick={this.props.clickHandler}>
          X
        </button>
      </li>
    );
  }
};


class Shuffle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpin: null,
      removedArticles: [],
      view: 'grid',
      sortingMethod: 'chronological',
      enterLeaveAnimation: 'accordionHorizontal',
      articles
    };
  }

  componentDidMount() {
      this.setState({
          showpin: this.props.showpin
      })
  }

  moveArticle(source, dest, id) {
    let sourceArticles = this.state[source].slice();
    let destArticles = this.state[dest].slice();
    let item;

    if ( !sourceArticles.length ) return;

    // Find the index of the article clicked.
    // If no ID is provided, the index is 0
    const i = id ? sourceArticles.findIndex(article => article.id === id) : 0;

    // If the article is already removed, do nothing.
    if ( i === -1 ) return;

    //destArticles = [].concat( sourceArticles.splice(i, 1), destArticles );
    sourceArticles = [].concat( sourceArticles.splice(i, 1), sourceArticles );

  
    this.setState({
      [source]: sourceArticles,
      [dest]: destArticles
    });

  }

  renderArticles() {
    return this.state.articles.map( (article, i) => {
      return (
        <ListItem
          key={article.id}
          view={this.state.view}
          index={i}
          clickHandler={
            throttle(() => this.moveArticle('articles', 'removedArticles', article.id), 800)}
          {...article}
        />
      );
    });
  }

  render() {
    return (
      <div id="shuffle" className={this.state.view}>
        <header>
          x
        </header>
        <div>
          <FlipMove
            staggerDurationBy="30"
            duration={500}
            enterAnimation={this.state.enterLeaveAnimation}
            leaveAnimation={this.state.enterLeaveAnimation}
            typeName="ul"
          >
            { this.renderArticles() }

            <footer key="foot">
              <div className="abs-right">
                <Toggle
                  clickHandler={() => (
                    this.moveArticle('removedArticles', 'articles')
                  )}
                  text="Add Item"
                  icon="plus"
                  active={this.state.removedArticles.length > 0}
                />

                <Toggle
                  clickHandler={() => (
                    this.moveArticle('articles', 'removedArticles')
                  )}
                  text="Remove Item"
                  icon="close"
                  active={this.state.articles.length > 0}
                />
              </div>
            </footer>
          </FlipMove>
        </div>
      </div>
    );
  }
};

export default Shuffle;