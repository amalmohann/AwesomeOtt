/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {ContentGrid, Header} from './components';

// importing model
import {ContentPreviewResponse} from './models';

const App: React.FC = () => {
  const [contents, setContents] = useState({});
  useEffect(() => {
    fetchData();
    console.log('====================================');
    console.log(contents);
    console.log('====================================');
  }, []);

  const fetchData = async () => {
    const data: ContentPreviewResponse = require('./res/json/CONTENTLISTINGPAGE-PAGE1.json');
    await setContents(data.page['content-items']);
  };

  let poster: string = 'poster6.jpg';

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={'black'} />
      <Header title="Romance" />
      {/* <FlatList data={data?['content-items']?.content}/> */}
      <ScrollView
        contentContainerStyle={styles.container}
        fadingEdgeLength={100}>
        <ContentGrid name="Hello" poster-image={poster} />
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
});

export default App;
