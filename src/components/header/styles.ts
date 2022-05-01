import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 8,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
    color: '#ffffff',
  },
  textInput: {
    fontSize: 20,
    color: '#ffffff',
    width: '60%',
    alignItems: 'center',
  },
});

export default styles;
