import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Content from './components/content/Content';
import Header from './components/header/Header';

const App = () => {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={'black'} />
      <Header title="Romance" />
      {/* <FlatList data={data?['content-items']?.content}/> */}
      <ScrollView
        contentContainerStyle={styles.container}
        fadingEdgeLength={100}>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
        <View>
          <Content title="Hello">
            <Image
              style={styles.contentImage}
              source={require('./res/images/poster6.jpg')}
            />
          </Content>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'black',
  },
  body: {
    backgroundColor: 'black',
    height: '100%',
    padding: 3,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  contentImage: {
    flex: 1,
    height: 175,
    width: 120,
  },
});

export default App;
