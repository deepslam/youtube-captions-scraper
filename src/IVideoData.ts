export interface IThumbnail {
  height: number;
  url: string;
  width: number;
}

export interface IVideoData {
  title: string;
  allowRatings: boolean;
  author: string;
  averageRating: number;
  channelId: string;
  isCrawlable: boolean;
  isLiveContent: boolean;
  isOwnerViewing: boolean;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  keywords: Array<string>;
  lengthSeconds: string;
  shortDescription: string;
  thumbnails: Array<IThumbnail>;
  useCipher: boolean;
  videoId: string;
  viewCount: string;
}
