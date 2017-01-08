import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';


const ButtonIcon = props => {
  const {
    items,
    actions,
    source,
    style,
    activeOpacity
  } = props;

  let imageSource;

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

  const _onPress = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }

        actions.addItem(source);
      }
    });
  }

  return (
    <TouchableOpacity style={styles.container}
      onPress={_onPress} activeOpacity={activeOpacity}>
      <Image source={source} style={style} />
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
});

ButtonIcon.propTypes = {
  source: PropTypes.number.isRequired,
  style: PropTypes.number,
  activeOpacity: PropTypes.number,
};

export default ButtonIcon;
