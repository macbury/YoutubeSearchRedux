import * as React from 'react';

interface SearchBarState {
  term: String;
}

class SearchBar extends React.Component<{}, SearchBarState> {

  constructor(props : any) {
    super(props);
    this.state = { term: '' };

  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onChange.bind(this)} />
        <p>{ this.state.term }</p>
      </div>

    );
  }

  private onChange(event : any) : void {
    this.setState({ term: event.target.value });
  }
 }

export default SearchBar;
