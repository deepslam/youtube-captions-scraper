import axios from "axios";
import he from "he";
import { ICaptionTrack } from "./ICaptionTrack";

import querystring from "querystring";

import striptags from "striptags";
import { ISubtitle } from "./ISubtitle";
import { IVideoData } from "./IVideoData";

const xml2js = require("react-native-xml2js");

/**
 * Youtube Caption Retriever
 *
 * Note: All Requests are locally cached
 * @export
 * @class YoutubeCaption
 */
export class YoutubeCaption {
  private _video_info: string = null;
  private _subtitles: { [lang: string]: ISubtitle[] } = {};

  /**
   * Creates an instance of YoutubeCaption
   * @param {string} videoId - The Youtube VideoId
   * @memberof YoutubeCaption
   */
  constructor(public readonly videoId: string) {}

  /**
   * Retrieve a list of Caption Tracks
   *
   * @returns {Promise<ICaptionTrack[]>}
   * @memberof YoutubeCaption
   */
  public async getCaptionTracks(): Promise<ICaptionTrack[]> {
    const videoInfo = await this.getVideoInfo();
    try {
      const parsedUrl = querystring.parse(videoInfo);
      // console.log(parsedUrl);
      const player_response = parsedUrl.player_response as string;
      // console.log("player response", player_response);
      const playerResponse = JSON.parse(player_response);
      // console.log("response", playerResponse);
      const captions = playerResponse.captions.playerCaptionsTracklistRenderer;
      const captionTracks = captions.captionTracks as ICaptionTrack[];

      return captionTracks;
    } catch (e) {
      throw e;
    }
  }

  /**
   * Retrieve Subtitles
   *
   * @param {string} [lang] - language to retrieve, defaults to en
   * @returns {Promise<ISubtitle[]>}
   * @memberof YoutubeCaption
   */
  public async getSubtitles(lang?: string): Promise<ISubtitle[]> {
    if (!lang) {
      lang = "en";
    }

    if (this._subtitles[lang]) {
      return this._subtitles[lang];
    }

    let captionTracks = [];

    try {
      captionTracks = await this.getCaptionTracks();
    } catch (e) {
      throw new Error("Unable to receive tracks");
    }
    const captionTrack = captionTracks.find(v => v.languageCode === lang);
    if (!captionTrack) {
      throw new Error("language not found");
    }

    const { data: transcript } = await axios.get(captionTrack.baseUrl);

    const result = await this.parseString(transcript);
    const lines = result.transcript.text.map((v: any) => {
      const decodedHtml = he.decode(v._);
      return {
        text: striptags(decodedHtml),
        htmlText: decodedHtml,
        dur: v.$.dur,
        start: v.$.start
      };
    });

    this._subtitles[lang] = lines;

    return this._subtitles[lang];
  }

  /**
   * Retrieve Video Info
   *
   * @private
   * @returns {Promise<string>}
   * @memberof YoutubeCaption
   */
  private async getVideoInfo(): Promise<string> {
    if (this._video_info) {
      return this._video_info;
    }

    const { data } = await axios.get(
      `https://youtube.com/get_video_info?video_id=${this.videoId}`
    );
    this._video_info = data;

    return this._video_info;
  }

  /**
   * Retrieve Video Info as an object
   *
   * @returns {Promise<any>}
   * @memberof YoutubeCaption
   */
  public async getVideoInfoObject(): Promise<IVideoData> {
    const videoInfo = await this.getVideoInfo();
    const info = querystring.parse(videoInfo);
    const player_response = info.player_response as string;
    if (player_response) {
      const parsedData = JSON.parse(player_response);
      if (parsedData.videoDetails) {
        return {
          title: parsedData.videoDetails.title,
          allowRatings: parsedData.videoDetails.allowRatings,
          author: parsedData.videoDetails.author,
          averageRating: parsedData.videoDetails.averageRating,
          channelId: parsedData.videoDetails.channelId,
          isCrawlable: parsedData.videoDetails.isCrawlable,
          isLiveContent: parsedData.videoDetails.isLiveContent,
          isOwnerViewing: parsedData.videoDetails.isOwnerViewing,
          isPrivate: parsedData.videoDetails.isPrivate,
          isUnpluggedCorpus: parsedData.videoDetails.isUnpluggedCorpus,
          keywords: parsedData.videoDetails.keywords,
          lengthSeconds: parsedData.videoDetails.lengthSeconds,
          shortDescription: parsedData.videoDetails.shortDescription,
          thumbnails:
            parsedData.videoDetails.thumbnail &&
            parsedData.videoDetails.thumbnail.thumbnails
              ? parsedData.videoDetails.thumbnail.thumbnails
              : [],
          useCipher: parsedData.videoDetails.useCipher,
          videoId: parsedData.videoDetails.videoId,
          viewCount: parsedData.videoDetails.viewCount
        };
      }
    }
    return null;
  }

  /**
   * Parse and Convert XML string to JSON
   *
   * @private
   * @param {string} xml
   * @returns {Promise<any>}
   * @memberof YoutubeCaption
   */
  private parseString(xml: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      xml2js.parseString(xml, (err: any, result: any) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}
