import * as React from 'react';
import SearchBar from './SearchBar';
import YTSearch from '../libs/YTSearch';

const YT_API_KEY  = 'AIzaSyA3L9r9GBi7TpPygQYdZ9yHEUb65MTM59w';

YTSearch({
  term: 'PlayStation 4',
  apiKey: YT_API_KEY
}, function(items) {
  console.log(items);
});

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <SearchBar />
    );
  }
}
