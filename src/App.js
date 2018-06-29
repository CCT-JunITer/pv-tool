import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LandingPage from './ExternalPages/LandingPage/LandingPage'
import Roadmap from './ExternalPages/Roadmap/Roadmap'
import CellBuilder from './containers/CellBuilder/CellBuilder';

class App extends Component {

  render() {
    return(
      <Router>
        <Switch>
          <Route path='/demo'>
            <Layout>
              <CellBuilder/>
            </Layout>
          </Route>
          <Route path='/roadmap' component={Roadmap}/>
          <Route path='/' component={LandingPage}/>
        </Switch>
      </Router>
    );
  }
}


export default App;
