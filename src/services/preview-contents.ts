import {Content, ContentItems, ContentPreviewResponse} from '../models';

const previewContentData: Content[] = [] as Content[];

const fetchData: (page: number) => Promise<ContentPreviewResponse> = async (
  page: number,
) => {
  switch (page) {
    case 1:
      return await require('../res/json/CONTENTLISTINGPAGE-PAGE1.json');
    case 2:
      return await require('../res/json/CONTENTLISTINGPAGE-PAGE2.json');
    case 3:
      return await require('../res/json/CONTENTLISTINGPAGE-PAGE3.json');
    default:
      return null;
  }
};

const initialize: () => void = () => {
  previewContentData.splice(0, previewContentData.length);
  console.log('Initialization completed!');
};

const getPreviews: (page: number) => Promise<ContentItems> = (page: number) => {
  return fetchData(page).then(
    (response: ContentPreviewResponse) => response!.page!['content-items']!,
  );
};

const PreviewContentService = {
  initialize: initialize,
  getPreviews: getPreviews,
};

export default PreviewContentService;
