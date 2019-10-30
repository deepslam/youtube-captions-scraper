import { expect } from "chai";
import "mocha";
import {
  getSubtitles,
  getSubtitlesContent,
  ISubtitle,
  getVideoInfo
} from "../src";
import { YoutubeCaption } from "../src/YoutubeCaption";

it("Extract estonia war videoInfo", async () => {
  const info = await getVideoInfo({ videoID: "HBA0xDHZjko" });
  expect(info).to.deep.include({
    allowRatings: true,
    author: "Eastory",
    channelId: "UCElybFZ60Hk1NSjgCf7I2sg",
    isCrawlable: true,
    isLiveContent: false,
    isOwnerViewing: false,
    isPrivate: false,
    isUnpluggedCorpus: false,
    keywords: ["Russian Civil War", "Estonia", "History", "White Army"],
    lengthSeconds: "1059",
    shortDescription:
      'Estonian War of Independence (1918-1920) took place in the aftermath of the Great War. Republics of Estonia and Latvia seek to become independent states and have to oppose the Bolsheviks who want to make them part of Soviet Russia. Meanwhile Germany seeks to expand its influence in the region relying on the Freikorps and the local Baltic German nobility and the White Russian forces prepare to capture Petrograd - the former capital of Russia and to overthrow the Bolsheviks.\n\nPatreon: https://www.patreon.com/Eastory\n\nUnit symbols:\nhttps://drive.google.com/open?id=1h03bzTXRMJmfoF78ExFizBjfPsGRzrLB\n\n00:17 - Lenin speaking on the Red Square. 24. May 1919. ERAF.2.1.3156.1\n00:23 - The flag of the Russian Battalion of Death. Henryk Mościcki.Jan Cynarski "Historia XX wieku" (History of XX c.) Warszawa 1934. https://en.wikipedia.org/wiki/White_movement#/media/File:Kornilostsy_standard_bearer.jpg\n02:55 - Armoured train infantry company. 1919. EAA.2073.2.14.1\n03:11 - Soldiers in trenches on the Southern Front, autumn 1919. EAA.2281.1.27.24p.135\n07:20 - Machine gunners on the Southern Front, autumn 1919. EAA.2281.1.27.13.69\n07:48 - Soldiers advancing on the Southern Front, autumn 1919. EAA.2281.1.27.23p.127\n08:25 - Soldiers on the Southern Front, autumn 1919. EAA.2281.1.27.17p.91\n09:38 - Leaders of the Northwestern Army, summer 1919. ERA.4996.1.387.34\n11:01 - Russian White troops disembarking in Pskov, probably May 1919. ERA.4996.1.265.34\n12:23 - Stormtroopers of the Baltic Landeswehr. 1919. ERA.1298.1.461.18\n13:27 - Peace talks between the Estonians and the Germans. EAA.5166.1.137.61\n16:26 - Civilian volunteers digging trenches on the Southern Front. 1919. EAA.2281.1.27.32p.182\n17:00 - Jaan Poska signing the Treaty of Tartu. 02.02.1920. EAA.2113.1.15.79\n\nThis video was created by using the assets from another video, that was funded by the Estonian War Museum.\n\nSources for unit symbols:\n\nKuperjanov Partisan Battalion, Kalevlaste maleva, Sakala Partisan Battalion, Scouts Battalion, Ingrian Battalion - Vabadussõja Ajaloo komitee, "Eesti Vabadussõda. 1918-1920"  II osa, Mats, Tallinn, 1997, lk 471\nPohjan Pojat Regiment - author Krizzu. https://fi.wikipedia.org/wiki/Pohjan_Pojat#/media/File:Pohjan_Pojat_(P%C3%B5hja_Pojad)_emblem.png\nIron Division - author MrPenguin20. https://et.wikipedia.org/wiki/Rauddiviis#/media/File:Flag_of_the_Iron_Division_Freikorps.svg\nBaltic Landeswehr - author Carport https://et.wikipedia.org/wiki/Rauddiviis#/media/File:Flag_of_the_Iron_Division_Freikorps.svg\nRussian White Forces in Latvia - Flag of a West Russian Volonteer Army - author MrPenguin20. https://en.wikipedia.org/wiki/West_Russian_Volunteer_Army#/media/File:Flag_of_the_West_Russian_Volunteer_Army.svg\nLatvian Valmiera and Cēsis Regiments - source: http://uniformologija.lv/raksts/vidzemes-divizija/\n\nDevastation and Revenge Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/\nPrelude and Action Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/\nNerves Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/',
    title: "Estonian War of Independence animated",
    videoId: "HBA0xDHZjko",
    thumbnails: [
      {
        height: 94,
        url:
          "https://i.ytimg.com/vi/HBA0xDHZjko/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLC24RtJ_IsQ5e9NO5E3gjOXaFdeaA",
        width: 168
      },
      {
        height: 110,
        url:
          "https://i.ytimg.com/vi/HBA0xDHZjko/hqdefault.jpg?sqp=-oaymwEiCMQBEG5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCTSMANBUtx9A75vgU18zYhq6-msQ",
        width: 196
      },
      {
        height: 138,
        url:
          "https://i.ytimg.com/vi/HBA0xDHZjko/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDaE2ftpYP-8AfCQjZAddKxfmKSYw",
        width: 246
      },
      {
        height: 188,
        url:
          "https://i.ytimg.com/vi/HBA0xDHZjko/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCAADbPqEat-um4QPt87VgH7G4lzg",
        width: 336
      }
    ]
  });
}).timeout(10000);

it("Extract estonia war subtitles", async () => {
	const subtitles = await getSubtitles({ videoID: "HBA0xDHZjko" });
	expect(subtitles[0]).to.deep.eq({
		dur: "5.87",
		htmlText: "November 19",
		start: "6.62",
		text: "November 19",
	});
}).timeout(10000);

it("Extract passive income video", async () => {
  const subtitles = await getSubtitles({ videoID: "JueUvj6X3DA" });
  expect(subtitles[0].text).to.contain("creating passive income takes work");
}).timeout(10000);

it("Extract automatic subtitles video", async () => {
  const subtitles = await getSubtitlesContent({ videoID: "P-ygmGxuiEI" });
  expect(subtitles).to.contain(
    "out what Alex made Alex is tiny LED matrix by the way oh let's have a look"
  );
}).timeout(10000);

it("Extract Russian subtitles", async () => {
	const subtitles = await getSubtitlesContent({ videoID: "s__wrEvEWJk", lang: "ru" });
	expect(subtitles).to.contain("как было бы круто бросит все съесть машину и уехать закат");
}).timeout(10000);

it("Extract Spanish subtitles", async () => {
	const subtitles = await getSubtitlesContent({ videoID: "rYA4O6B6oTw", lang: "es" });
	expect(subtitles).to.contain("a practicar una pronunciación y expresión natural");
}).timeout(10000);

describe("YoutubeCaptions", () => {
	it("Extract estonia war subtitles with ", async () => {
		const youtubeCaptions = new YoutubeCaption("HBA0xDHZjko");
		const subtitles = await youtubeCaptions.getSubtitles();
		expect(subtitles[0]).to.deep.eq({
			dur: "5.87",
			htmlText: "November 19",
			start: "6.62",
			text: "November 19",
		});
	}).timeout(10000);

	it("Extract estonia war caption tracks", async () => {
		const youtubeCaptions = new YoutubeCaption("HBA0xDHZjko");
		const captionTracks = await youtubeCaptions.getCaptionTracks();
		expect(captionTracks.length).to.greaterThan(1);
		expect(captionTracks[0]).to.contain({
			kind: "asr",
			languageCode: "en",
			vssId: "a.en"
		});
	}).timeout(10000);

	describe("Styled", () => {
		let subtitles: ISubtitle[] = null;
		before(async () => {
			const youtubeCaptions = new YoutubeCaption( "9W0Dy1nM-zU" );
			subtitles = await youtubeCaptions.getSubtitles();
		});

  it("Extract estonia war caption tracks", async () => {
    const youtubeCaptions = new YoutubeCaption("HBA0xDHZjko");
    const captionTracks = await youtubeCaptions.getCaptionTracks();
    expect(captionTracks.length).to.greaterThan(1);
    expect(captionTracks[0]).to.contain({
      kind: "asr",
      languageCode: "en",
      vssId: "a.en"
    });
  }).timeout(10000);

  describe("Styled", () => {
    let subtitles: ISubtitle[] = null;
    before(async () => {
      const youtubeCaptions = new YoutubeCaption("9W0Dy1nM-zU");
      subtitles = await youtubeCaptions.getSubtitles();
    });

    it("plain text", () => {
      expect(subtitles[0].text).to.eq("Bold");
      expect(subtitles[1].text).to.eq("Italic");
      expect(subtitles[2].text).to.eq("Underline");
      expect(subtitles[3].text).to.eq("Bold Italic Underline");
      expect(subtitles[4].text).to.eq("Red (a = 40)");
    });
    it("html", () => {
      expect(subtitles[0].htmlText).to.eq("<b>Bold</b>");
      expect(subtitles[1].htmlText).to.eq("<i>Italic</i>");
      expect(subtitles[2].htmlText).to.eq("<u>Underline</u>");
      expect(subtitles[3].htmlText).to.eq(
        "<b>Bold</b> <i>Italic</i> <u>Underline</u>"
      );
      expect(subtitles[4].htmlText).to.eq(
        '<font color="#FF0000">Red (a = 40)</font>'
      );
    });
  });
});
}).timeout(10000);