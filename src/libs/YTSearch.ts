import { get } from 'axios';

interface IYTSearchOptions {
  term: String,
  apiKey: String
}

export interface YoutubeVideo {
  etag: string,
  id: { kind: string, videoId: string },
  snippet: {
    channelId: string,
    channelTitle: string,
    description: string,
    publishedAt: string,
    title: string,
    thumbnails: { [key: string]: { height: number, width: number, url: string } }
  }
}

/**
* Search videos using youtube api
*/
export function YTSearch(options : IYTSearchOptions, callback : (items : Array<YoutubeVideo>) => void) : void {
  var params = {
    part: 'snippet',
    key: options.apiKey,
    q: options.term,
    type: 'video'
  };

  get('https://www.googleapis.com/youtube/v3/search', { params }).then((response) => {
    callback(response.data['items']);
  });
}
