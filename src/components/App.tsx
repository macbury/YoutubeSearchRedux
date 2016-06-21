import * as React from 'react';
import SearchBar from './SearchBar';
import { YTSearch, YoutubeVideo } from '../libs/YTSearch';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const YT_API_KEY  = 'AIzaSyA3L9r9GBi7TpPygQYdZ9yHEUb65MTM59w';

interface AppState {
  videos: Array<YoutubeVideo>,
  selectedVideo?: YoutubeVideo
}

export class App extends React.Component<any, AppState> {

  constructor(props : any) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('Playstation 4');
  }

  videoSearch(term) {
    YTSearch({ term: term, apiKey: YT_API_KEY }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  onVideoSelect(selectedVideo : YoutubeVideo) {
    this.setState(Object.assign(this.state, { selectedVideo }));
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch.bind(this)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect.bind(this)} />
      </div>
    );
  }
}
