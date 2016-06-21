import * as React from 'react';
import SearchBar from './SearchBar';
import { YTSearch, YoutubeVideo } from '../libs/YTSearch';
import VideoList from './VideoList';

const YT_API_KEY  = 'AIzaSyA3L9r9GBi7TpPygQYdZ9yHEUb65MTM59w';

interface AppState {
  videos: Array<YoutubeVideo>
}

export class App extends React.Component<any, AppState> {

  constructor(props : any) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ term: 'PlayStation 4', apiKey: YT_API_KEY }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
