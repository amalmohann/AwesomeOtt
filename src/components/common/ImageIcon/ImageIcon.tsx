/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageSourcePropType, ToastAndroid, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ImageIconProps {
  tooltip?: string;
  icon: ImageSourcePropType;
}

const ImageIcon: React.FC<ImageIconProps> = (imageIconProps) => {
  return (
    <TouchableOpacity
      onLongPress={() => imageIconProps.tooltip ? ToastAndroid.show(imageIconProps.tooltip, ToastAndroid.LONG) : null}
      onPress={() => {
        console.log('hello');
      }}>
      <Image style={styles.iconImage} source={imageIconProps.icon} />
    </TouchableOpacity>
  );
};

export default ImageIcon;
