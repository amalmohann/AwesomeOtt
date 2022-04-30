import React from 'react';
import {Image, Text, View} from 'react-native';
import {Content} from '../../models';
import styles from './styles';

const previewImage: any = (imageSource: string) => {
  switch (imageSource) {
    case 'poster1.jpg':
      return require('../../res/images/poster1.jpg');
    case 'poster2.jpg':
      return require('../../res/images/poster2.jpg');
    case 'poster3.jpg':
      return require('../../res/images/poster3.jpg');
    case 'poster4.jpg':
      return require('../../res/images/poster4.jpg');
    case 'poster5.jpg':
      return require('../../res/images/poster5.jpg');
    case 'poster6.jpg':
      return require('../../res/images/poster6.jpg');
    case 'poster7.jpg':
      return require('../../res/images/poster7.jpg');
    case 'poster8.jpg':
      return require('../../res/images/poster8.jpg');
    case 'poster9.jpg':
      return require('../../res/images/poster9.jpg');
    default:
      return require('../../res/images/placeholder_for_missing_posters.png');
  }
};

const ContentGrid: React.FC<Content> = props => {
  return (
    <View style={styles.content}>
      <View style={styles.contentImageContainer}>
        <Image
          style={styles.contentImage}
          source={previewImage(props['poster-image']!)}
        />
      </View>
      <Text style={styles.contentTitle}>{props.name}</Text>
    </View>
  );
};

export default ContentGrid;
