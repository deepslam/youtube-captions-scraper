# Youtube Captions Scraper (with React Native support)

Note: This is forked from [@drorgl/youtube-captions-scraper](https://github.com/drorgl/youtube-captions-scraper) and React Native support has been added.


* Fetch Caption Tracks
* Fetch Subtitles by language
* Fetch Auto-Generated Captions
* Fetch Full Text of Captions

## Installation

 `> npm install youtube-captions-scraper-react-native`

## Usage

```typescript
import {
  YoutubeCaptions, 
  getSubtitles, 
  getSubtitlesContent 
  } from 'youtube-captions-scraper';

//Get Subtitles for Video
getSubtitles({
  videoID: 'XXXXX', // youtube video id
  lang: 'fr' // default: `en`
}).then(captions => {
  console.log(captions);
});

//Get full transcription as one string
const subtitles = await getSubtitlesContent({ videoID: "P-ygmGxuiEI" });

let youtubeCaptions = new YoutubeCaptions('XXXXX' /*youtube video id*/);

//retrieve caption tracks
let captionTracks = await youtubeCaptions.getCaptionTracks();

//retrieve subtitles by language
let subtitles = await youtubeCaptions.getSubtitles('en' /*optional language*/);

```

Captions will be an array of object of this format:

```typescript
{
  "start": Number,
  "dur": Number,
  "text": String, //HTML stripped subtitles
  "htmlText":String
}
```
