import React, { useState } from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

import backIcon from '../../res/icons/Back.png';
import SearchIcon from '../../res/icons/search.png';
import ImageIcon from '../common/ImageIcon/ImageIcon';
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = headerProps => {
  const [searchBarToggle, setSearchBarToggle] = useState(false);
  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <ImageIcon icon={backIcon} tooltip={'Back'} />
        <Text style={styles.text}>{headerProps.title}</Text>
      </View>
      <ImageIcon icon={SearchIcon} tooltip={'Search'}/>
    </View>
  );
};

export default Header;
