import React, {useEffect} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import {ContentGrid, Header} from '../../components';
// import {ContentPreviewResponse} from '../../models';
import styles from './styles';
import {PreviewContentService} from '../../services';

// const data: ContentPreviewResponse = require('./res/json/CONTENTLISTINGPAGE-PAGE1.json');

const initComponent = async () => {
  await PreviewContentService.initialize();
  retrieveData(3);
};

const retrieveData = async (page: number) => {
  await PreviewContentService.getPreviews(page);
};

const Home: React.FC = () => {
  useEffect(() => {
    initComponent();
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={'black'} />
      <Header title="Romance" />
      {/* <FlatList data={data?['content-items']?.content}/> */}
      <ScrollView
        contentContainerStyle={styles.container}
        fadingEdgeLength={100}>
        <ContentGrid name="Hello" poster-image={'poster1.jpg'} />
      </ScrollView>
    </View>
  );
};

export default Home;
