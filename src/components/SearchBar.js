import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form
          className="search__form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSearch(this.state.searchTerm);
          }}
        >
          <input
            className="search__input"
            type="text"
            onChange={this.onInputChange}
          />
          <button className="search__submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
