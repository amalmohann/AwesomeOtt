/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ImageIconProps {
  tooltip?: string;
  icon: ImageSourcePropType;
}

const ImageIcon: React.FC<ImageIconProps> = (imageIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('hello');
      }}>
      <Image style={styles.iconImage} source={imageIconProps.icon} />
    </TouchableOpacity>
  );
};

export default ImageIcon;
