import { ICaptionTrack } from "./ICaptionTrack";
import { ISubtitle } from "./ISubtitle";
import { IVideoData } from "./IVideoData";
import { YoutubeCaption } from "./YoutubeCaption";

export { YoutubeCaption, ISubtitle, ICaptionTrack, IVideoData };

interface ISubtitleOptions {
<<<<<<< HEAD
	videoID: string;
	lang?: "en" | "de" | "fr" | "es" | "ru" | "it";
=======
  videoID: string;
  lang?: "en" | "de" | "fr";
>>>>>>> 832d111598c3520f6c9c5acca4db98061d964a74
}

/**
 * Retrieves Subtitles for certain youtube video
 *
 * @export
 * @param {ISubtitleOptions} {
 * 	videoID,
 * 	lang = 'en',
 * }
 * @returns {Promise<ISubtitle[]} subtitles
 */
export async function getSubtitles({
  videoID,
  lang = "en"
}: ISubtitleOptions): Promise<ISubtitle[]> {
  const youtubeCaptions = new YoutubeCaption(videoID);
  return await youtubeCaptions.getSubtitles(lang);
}

/**
 * Retrieves Information about certain video
 *
 * @export
 * @param {ISubtitleOptions} {
 * 	videoID,
 * }
 * @returns {Promise<ISubtitle[]} subtitles
 */
export async function getVideoInfo({
  videoID
}: ISubtitleOptions): Promise<IVideoData> {
  const youtubeCaptions = new YoutubeCaption(videoID);
  return await youtubeCaptions.getVideoInfoObject();
}

/**
 * Retrieves Subtitles for certain youtube video
 *
 * @export
 * @param {ISubtitleOptions} {
 * 	videoID,
 * 	lang = 'en',
 * }
 * @returns {string} subtitles
 */
export async function getSubtitlesContent({
  videoID,
  lang = "en"
}: ISubtitleOptions): Promise<string> {
  const subtitles = await getSubtitles({ videoID, lang });
  let content = "";
  for (const subtitle of subtitles) {
    content += " " + subtitle.text;
  }

  return content.replace(/([\s\r\n])+/g, " ");
}
