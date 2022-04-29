import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

import backIcon from '../../res/icons/Back.png';
import SearchIcon from '../../res/icons/search.png';
import ImageIcon from '../common/ImageIcon/ImageIcon';
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <ImageIcon icon={backIcon} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <ImageIcon icon={SearchIcon} />
    </View>
  );
};

export default Header;
