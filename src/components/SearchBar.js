var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        _super.call(this, props);
        this.state = { term: '' };
    }
    SearchBar.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("input", {"value": this.state.term, "onChange": this.onChange.bind(this)}), React.createElement("p", null, this.state.term)));
    };
    SearchBar.prototype.onChange = function (event) {
        this.setState({ term: event.target.value });
    };
    return SearchBar;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map