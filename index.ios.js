import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import { AppRegistry } from 'react-native';

import App from './src/components';

const store = configureStore();

class colorextractor extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('colorextractor', () => colorextractor);
