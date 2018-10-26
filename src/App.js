import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
import Modal from 'react-modal';
import data from './data/card_home.json';
import 'react-drawer/lib/react-drawer.css';
import './stylesheets/App.css';
import {Link} from 'react-router-dom';

import dataRelated from './data/related_home.json';
import dataRelated_Savings from './data/related_savings.json';
import dataRelated_Health from './data/related_health.json';
import dataRelated_Work from './data/related_work.json';

import CardsNx from './Components/Card/CardsNx';
import Related from './Components/Related/Related';
import HeaderBar from './Components/Header/HeaderBar';
import Banner from './Components/Header/Banner';
import Footer from './Components/Footer/Footer';
import IvaTrigger from './Components/Utility/IvaTrigger';
// import SystemMessage from './Components/Utility/SystemMessage';


let homeContentStyle = {position: 'absolute', margin: 'auto', width: '100%', transform: 'translate(0%, -3.4%)'}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cards: [],
      cardsdata: [],
      relateddata: [],
      relateddata_Savings: [],
      relateddata_Health: [],
      relateddata_Work: [],
      toolboxedit_show: false,
      showMsg: true
    }
    //this.dismissMsg = this.dismissMsg.bind(this);
  }


  getData(){
    this.setState({
      cardsdata: data, 
      relateddata: dataRelated,
      relateddata_Savings: dataRelated_Savings,
      relateddata_Health: dataRelated_Health,
      relateddata_Work: dataRelated_Work
    })
  }

  componentWillMount(){
    this.getData();
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  // dismissMsg() {
  //   this.setState({ showMsg: !this.state.showMsg})
  // }


  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}`} onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App" id="wrapper" ref={ref => this.el = ref}>

          <Route path='/' component={HeaderBar} />
          
          <Route exact strict path='/' render={()=> {return(
            <main>
              <Banner />
              <div className="content" style={homeContentStyle}>
                
                <CardsNx cardsdata={this.state.cardsdata} />
                                                          
                <Related relateddata={this.state.relateddata} />
                <Footer />
              </div>
              {/* {this.state.toolboxedit_show && (<ToolboxEditor show={this.state.toolboxedit_show} onClickClose={this.hideToolEdit} />)} */}
            </main>
          )}} />

          <Route exact strict path='/x' render={()=> {return(
            <main>
              {/* {this.state.showMsg && (<SystemMessage onClick={this.dismissMsg} />)} */}
              <Banner />
              <div className="content" style={homeContentStyle}>
                <CardsNx cardsdata={this.state.cardsdata} />                             
                <Related relateddata={this.state.relateddata} />
                <Footer />
              </div>
            </main>
          )}} />

          <Route exact strict path='/blank' render={()=> {return(
            <main>
              <div style={{padding:'100px'}}>
                <p>B L A N K - P A G E</p>
                <br /><br />
                <Link to="/">Go back</Link>
                <br /><br /><br />
                <p>B L A N K - P A G E</p>
                <br /><br />
                <Link to="/">Go back</Link>
                <br /><br /><br />
                <p>B L A N K - P A G E</p>
                <br /><br />
                <Link to="/">Go back</Link>
                <br /><br /><br />
                <p>B L A N K - P A G E</p>
                <br /><br />
                <Link to="/">Go back</Link>
                <br /><br /><br />
                <p>B L A N K - P A G E</p>
                <br /><br />
                <Link to="/">Go back</Link>
                <br /><br /><br />
              </div>
              <Footer />
            </main>
          )}} />
          
          <IvaTrigger />
        </div>
      </Router>
    );
  }
}

export default App;
