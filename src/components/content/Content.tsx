import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Content: React.FC<{
  title: string;
}> = ({children, title}) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentImageContainer}>{children}</View>
      <Text style={styles.contentTitle}>{title}</Text>
    </View>
  );
};

export default Content;
