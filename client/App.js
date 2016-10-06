import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = syncHistoryWithStore(browserHistory, this.props.store);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.history} routes={routes} />
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
