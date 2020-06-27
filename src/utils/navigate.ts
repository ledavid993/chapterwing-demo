export const navigateToChapterPage = (
  router: any,
  pageUrl: string,
  novelTitle: string,
  volumeTitle: string,
  chapterNumber: number
) => {
  router.push(`${pageUrl}/${novelTitle}/${volumeTitle}/${chapterNumber}`);
};

export const navigateToNovelPage = (router: any, pageUrl: string, novelTitle: string) => {
  router.push(`${pageUrl}/${novelTitle}`);
};
