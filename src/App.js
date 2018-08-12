import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import Layout from './hoc/Layout/Layout';
import LandingPage from './ExternalPages/LandingPage/LandingPage'
import Roadmap from './ExternalPages/Roadmap/Roadmap'
import CellBuilder from './containers/CellBuilder/CellBuilder';
import {initialQuery} from "./store/actions/actions";

class App extends Component {
  constructor(props) {
    super(props)
    this.props.init()
  }
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

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(initialQuery())
  }
}

export default connect(null, mapDispatchToProps)(App)
