import React, { Component } from 'react';
import Navigation from '../../../components/Nav/';
import { Link, Switch, Route, Redirect } from 'react-router-dom'

import Footer from '../../../components/Footer/';
import Breadcrumb from '../../../components/Breadcrumb/';

import Landing from '../../../views/Landing/'
import Investor from '../../../views/Pages/Investor/'
import Acquisition from '../../../views/Pages/Acquisition/'
import SME from '../../../views/Pages/SME/'


class Frontpage extends Component {
 constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="app">
        <Navigation pages="main"/>
        <div className="app-body">
          <main className="main">
            <div className="container-fluid">
              <Switch>
                <Route path="/investor" name="Investor" component={Investor}/>
                <Route path="/acquisition" name="Acquisition" component={Acquisition}/>
                <Route path="/sme" name="SME" component={SME}/>
                <Route path="/" name="Landing" component={Landing}/>
                <Redirect from="/" to="/"/>
              </Switch>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Frontpage;


