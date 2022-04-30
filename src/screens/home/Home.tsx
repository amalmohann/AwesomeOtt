import React, {useEffect, useState} from 'react';
import {View, StatusBar, ActivityIndicator, FlatList} from 'react-native';
import {ContentGrid, Header} from '../../components';
import styles from './styles';
import {PreviewContentService} from '../../services';
import {Content, ContentItems} from '../../models';

const Home: React.FC = () => {
  const [previewContents, setPreviewContents] = useState<Content[]>([]);
  const [page, setPage] = useState<number>(1);
  const [endOfList, setEndOfList] = useState<boolean>(false);

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
          setPage(page + 1);
        } else {
          setEndOfList(true);
        }
      },
    );
  };

  const handleOnFlatListEnd = async () => {
    if (!endOfList) {
      await retrieveData(page);
    } else {
      console.log('End of List');
    }
  };

  return (
    <View style={styles.body}>
      <StatusBar {...styles.statusBar} />
      <Header title="Romance" />
      {previewContents.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            // ItemSeparatorComponent={()=><View style={{margin:1}}></View>}
            // CellRendererComponent={()=><View style={{margin:1}}></View>}
            // contentContainerStyle={styles.container}
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
            onEndReachedThreshold={0.8}
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
