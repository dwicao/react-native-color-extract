import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Style from '../../../utils/Style';
import ButtonContentList from '../../Buttons/ButtonContentList';
import iconAdd from '../../../images/add.png';

const List = props => {
  const {
    items,
    actions,
  } = props;

  const _renderList = (item, index) => {
    return (
      <View key={index} style={styles.row}>
        <ButtonContentList source={item.source} {...props} />
      </View>
    );
  }

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
