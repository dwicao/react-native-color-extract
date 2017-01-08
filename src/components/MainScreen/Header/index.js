import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import ButtonAdd from '../../Buttons/ButtonAdd';
import Style from '../../../utils/Style';
import iconAdd from '../../../images/add.png';

const Header = props => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Color Palette Extractor</Text>
      <ButtonAdd style={styles.buttonAdd}
        source={iconAdd}
        activeOpacity={0.7}
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
