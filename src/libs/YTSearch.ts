import { get } from 'axios';

interface IYTSearchOptions {
  term: String,
  apiKey: String
}

/**
* Search videos using youtube api
*/
export default function YTSearch(options : IYTSearchOptions, callback : (items) => void) : void {
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
