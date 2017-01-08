import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import Style from '../../utils/Style';

const ButtonContentList = props => {
  const {
    source,
  } = props;

  const _onPress = () => {

  }

  return (
    <TouchableOpacity style={styles.container}
      onPress={_onPress} activeOpacity={0.7}>
      <View style={styles.background}>
        <Image source={source} style={styles.image} />
        <View style={styles.gradient}/>
        <View style={styles.gradient}/>
        <View style={styles.gradient}/>
      </View>
    </TouchableOpacity>
  );

}

const mySize = Style.DEVICE_WIDTH / 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 1,
  },
  image: {
    width: mySize,
    height: mySize,
    backgroundColor: 'black',
  },
  background: {
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  gradient: {
    width: mySize,
    height: mySize,
    backgroundColor: 'blue',
  }
});

ButtonContentList.propTypes = {
  source: PropTypes.object.isRequired,
};

export default ButtonContentList;
