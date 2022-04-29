import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ImageIconProps {
  tooltip?: string;
  icon: ImageSourcePropType;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ImageIcon: React.FC<ImageIconProps> = ({tooltip, icon}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('hello');
      }}>
      <Image style={styles.iconImage} source={icon} />
    </TouchableOpacity>
  );
};

export default ImageIcon;
