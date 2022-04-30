import React, { useEffect, useState } from 'react';
import { View, StatusBar, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { ContentGrid, Header } from '../../components';
import styles from './styles';
import { PreviewContentService } from '../../services';
import { Content, ContentItems } from '../../models';

const Home: React.FC = () => {
    const [previewContents, setPreviewContents] = useState<Content[]>([]);

    useEffect(() => {
        initComponent();
    }, []);

    const initComponent = async () => {
        await PreviewContentService.initialize();
        await retrieveData(1);
    };

    const retrieveData = async (page: number) => {
        PreviewContentService.getPreviews(page).then(
            (contentItems: ContentItems) => {
                if (contentItems) {
                    setPreviewContents([...previewContents, ...contentItems.content]);
                    console.log(contentItems.content);
                }
            },
        );
    };

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'black'} />
            <Header title="Romance" />
            {(previewContents.length > 0) ? (
                <View style={styles.container}>
                    <FlatList
                        numColumns={3}
                        fadingEdgeLength={100}
                        data={previewContents}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item }) => <ContentGrid name={item.name} poster-image={item['poster-image']} />} />
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
