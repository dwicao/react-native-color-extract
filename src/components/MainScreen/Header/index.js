import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import ButtonIcon from '../../Buttons/ButtonIcon';
import Style from '../../../utils/Style';
import iconAdd from '../../../images/add.png';

const Header = props => {

  const _onPress = () => {
    Alert.alert('Add button clicked');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Color Palette Extractor</Text>
      <ButtonIcon style={styles.buttonAdd}
        source={iconAdd}
        activeOpacity={0.7}
        onPress={_onPress}
        {...props}/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: Style.UNIT * 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#50638b',
  },
  text: {
    left: Style.UNIT,
    color: 'white',
    fontSize: Style.FONT_SIZE * 1.2,
  },
  buttonAdd: {
    width: Style.UNIT * 3,
    height: Style.UNIT * 3,
  },
});

export default Header;
