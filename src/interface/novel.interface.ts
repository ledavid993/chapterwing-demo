export interface NovelState {
  popularNovels: any[];
  recommendedNovels: any[];
  library: { count: number; results: [] };
  reviews: { count: number; results: ReviewEntity[] };
  currentNovel: CurrentNovel;
  loading: boolean;
  error: string;
  currentChapter: ContentsEntity;
}

export interface CurrentNovel {
  novel: Novel;
  volumes?: VolumesEntity[] | null;
}
export interface Novel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  status: string;
  createdDate: string;
  updatedDate: string;
  author: string;
  genres: string[] | null;
  tags: string[] | null;
  image: string;
  rating: string;
  vote: number;
  isPublish: boolean;
  views: number;
  userId: string;
}
export interface VolumesEntity {
  id: string;
  title: string;
  category: string;
  description: string;
  createdDate: string;
  updatedDate: string;
  projectId: string;
  contents: ContentsEntity[];
}
export interface ContentsEntity {
  id: string;
  title: string;
  chapterNumber: number;
  createdDate: string;
  updatedDate: string;
  isPublish: boolean;
  views: number;
  taskId: string;
  document?: string;
}

export interface ReviewEntity {
  id: string;
  text: string;
  rating: number;
  createdDate: Date;
  updatedDate: Date;
  projectId: string;
  userId: string;
  username?: any;
}
