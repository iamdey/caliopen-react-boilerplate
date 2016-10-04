import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Auth from './auth';
import Discussions from './discussions';


class App extends Component {
  constructor(props) {
    super(props);
    this.history = syncHistoryWithStore(browserHistory, this.props.store);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.history}>
          <Route path="/" component={Discussions}>
          </Route>
          <Route path="/auth" component={Auth} />
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
