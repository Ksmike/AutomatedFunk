import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

// Containers
import Full from './containers/Full/'
import Frontpage from './views/Pages/Frontpage/'
import Acquisition from './views/Pages/Acquisition/'
import Investor from './views/Pages/Investor/'
import SME from './views/Pages/SME/'

const history = createBrowserHistory();

ReactDOM.render((
  <HashRouter history={history}>
    <Switch>
      <Route path="/dashboard" name="Main" component={Full}/>
      <Route path="/acquisition" name="Acquisition" component={Acquisition}/>
      <Route path="/investor" name="Investor" component={Investor}/>
      <Route path="/sme" name="SME" component={SME}/>
      <Route path="/" name="Home" component={Frontpage}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))
