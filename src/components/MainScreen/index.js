import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';

import Header from './Header';
import List from './List';

const MainScreen = props => {

  return (
    <View style={styles.container}>
      <Header {...props} />
      <List {...props} />
    </View>
  );

}

const statusbarTop = (Platform.OS === 'ios') ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: statusbarTop,
  }
});

export default MainScreen;
