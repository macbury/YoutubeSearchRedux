import * as React from 'react';

interface SearchBarState {
  term: String;
}

interface SearchBarProps {
  onSearchTermChange: (term : string) => void
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  constructor(props : any) {
    super(props);
    this.state = { term: '' };

  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onChange.bind(this)} />
      </div>
    );
  }

  private onChange(event : any) : void {
    let term = event.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
 }

export default SearchBar;
