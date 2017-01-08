import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';

import Style from '../../../utils/Style';
import ButtonContentList from '../../Buttons/ButtonContentList';
import iconAdd from '../../../images/add.png';

const List = props => {
  const {
    items,
    actions,
  } = props;


  const _onPress = () => {
    Alert.alert('Add button clicked');
  }

  const _renderList = (item, index) => {
    return (
      <View key={index} style={styles.row}>
        <ButtonContentList source={item.uri} {...props} />
      </View>
    );
  }

  const data = Array.from({length: 10});

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        { items.map(_renderList) }
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {

  }
});

export default List;
