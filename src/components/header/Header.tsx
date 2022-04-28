import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

import backIcon from '../../res/icons/Back.png';
import SearchIcon from '../../res/icons/search.png';

const Header: React.FC<{
  title: string;
}> = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <Image style={styles.icon} source={backIcon} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image style={styles.icon} source={SearchIcon} />
    </View>
  );
};

export default Header;
