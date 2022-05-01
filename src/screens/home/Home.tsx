/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StatusBar, ActivityIndicator, FlatList} from 'react-native';
import {ContentGrid, Header} from '../../components';
import styles from './styles';
import {PreviewContentService} from '../../services';
import {Content, ContentItems} from '../../models';

const Home: React.FC = () => {
  const AppbarTitle = 'Romantic Comedy';
  const [previewContents, setPreviewContents] = useState<Content[]>([]);
  const [filteredContents, setFilteredContents] = useState<Content[]>([]);
  const [page, setPage] = useState<number>(1);
  const [endOfList, setEndOfList] = useState<boolean>(false);

  useEffect(() => {
    initComponent();
  }, []);

  const initComponent = async () => {
    await PreviewContentService.initialize();
    await retrieveData(page);
  };

  const searchFilter = (searchText: string) => {
    if (searchText) {
      const searchFilterContent = previewContents.filter((content: Content) =>
        content.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredContents(searchFilterContent);
    } else {
      setFilteredContents(previewContents);
    }
  };

  const retrieveData = async (pageOffset: number) => {
    PreviewContentService.getPreviews(pageOffset).then(
      (contentItems: ContentItems) => {
        if (contentItems.content) {
          setPreviewContents([...previewContents, ...contentItems.content]);
          setFilteredContents([...previewContents, ...contentItems.content]);
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
      <Header title={AppbarTitle} searchFilter={searchFilter} />
      {previewContents.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
            fadingEdgeLength={100}
            data={filteredContents}
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
