import {StyleSheet} from 'react-native';
import { windowWidth } from '../../res/constants';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'black',
  },
  body: {
    backgroundColor: 'black',
    height: '100%',
    width: windowWidth,
    padding: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default styles;
