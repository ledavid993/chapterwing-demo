export const navigateToChapterPage = (
  router: any,
  pageUrl: string,
  novelTitle: string | string[],
  chapterNumber: number
) => {
  router.push(`${pageUrl}/${novelTitle}/${chapterNumber}`);
};

export const navigateToNovelPage = (router: any, pageUrl: string, novelTitle: string) => {
  router.push(`${pageUrl}/${novelTitle}`);
};
