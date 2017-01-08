import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';
import { View, StyleSheet } from 'react-native';

import MainScreen from './MainScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

function mapStateToProps(state) {
	return {
		items: state.items,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(itemActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
