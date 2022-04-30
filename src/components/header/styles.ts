import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingHorizontal:5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom:8,
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
  textInput:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    width:'60%'
  },
});

export default styles;
