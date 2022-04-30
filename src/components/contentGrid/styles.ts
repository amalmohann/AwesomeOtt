import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  content: {
    marginBottom:25,
    // flex: 1,
    flexDirection: 'column',
    height: '30%',
    width: '34%',
  },
  contentImageContainer: {
    flex:1,
    height:'80%',
    width:'100%',
    marginBottom:8,
  },
  contentTextContainer:{
    flex:1,
    height:'20%',
    width:"100%",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentImage: {
    height:(windowWidth/3.5) * 1.5,
    width:windowWidth/3.5,
    flex: 1,
  },
  contentTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'normal',
    textAlign: 'left',
  },
});

export default styles;
