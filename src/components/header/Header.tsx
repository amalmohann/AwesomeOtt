import React, {useState} from 'react';
import {Keyboard, Text, TextInput, View} from 'react-native';
import styles from './styles';

import backIcon from '../../res/icons/Back.png';
import SearchIcon from '../../res/icons/search.png';
import ImageIcon from '../common/ImageIcon/ImageIcon';
interface HeaderProps {
  title: string;
  searchFilter: (text: string) => void;
}

const Header: React.FC<HeaderProps> = headerProps => {
  const [searchBarToggle, setSearchBarToggle] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  const handleInput = (text: string) => {
    setSearchKey(text);
    headerProps.searchFilter(text);
  };

  const handleBackPress = () => {
    if (searchBarToggle) {
      Keyboard.dismiss();
      setSearchKey('');
      headerProps.searchFilter('');
      setSearchBarToggle(false);
    }
  };

  const handleSearch = () => {
    setSearchBarToggle(!searchBarToggle);
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <ImageIcon
          icon={backIcon}
          tooltip={'Back'}
          pressAction={() => handleBackPress()}
        />
        {!searchBarToggle ? (
          <Text style={styles.text}>{headerProps.title}</Text>
        ) : (
          <TextInput
            autoFocus={true}
            keyboardType="web-search"
            style={styles.textInput}
            placeholder={'search here'}
            placeholderTextColor={'white'}
            value={searchKey}
            onChangeText={text => handleInput(text)}
          />
        )}
      </View>
      {!searchBarToggle ? (
        <ImageIcon
          icon={SearchIcon}
          tooltip={'Search'}
          pressAction={() => handleSearch()}
        />
      ) : null}
    </View>
  );
};

export default Header;
