import React, {useEffect, useState} from 'react';
import {View, StatusBar, ActivityIndicator, FlatList} from 'react-native';
import {ContentGrid, Header} from '../../components';
import styles from './styles';
import {PreviewContentService} from '../../services';
import {Content, ContentItems} from '../../models';

const Home: React.FC = () => {
  const [previewContents, setPreviewContents] = useState<Content[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    initComponent();
  }, []);

  const initComponent = async () => {
    await PreviewContentService.initialize();
    await retrieveData(page);
  };

  const retrieveData = async (pageOffset: number) => {
    PreviewContentService.getPreviews(pageOffset).then(
      (contentItems: ContentItems) => {
        if (contentItems.content) {
          setPreviewContents([...previewContents, ...contentItems.content]);
          console.log(contentItems.content);
        }
      },
    );
  };

  const handleOnFlatListEnd = () => {
    console.log('Triggered');
  };

  return (
    <View style={styles.body}>
      <StatusBar {...styles.statusBar} />
      <Header title="Romance" />
      {previewContents.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            numColumns={3}
            fadingEdgeLength={100}
            data={previewContents}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => (
              <ContentGrid
                name={item.name}
                poster-image={item['poster-image']}
              />
            )}
            onEndReached={handleOnFlatListEnd}
            onEndReachedThreshold={0.5}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

export default Home;
