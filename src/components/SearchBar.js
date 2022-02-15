import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?",
      {
        params: {
          q: "hello",
          key: "AIzaSyDNe8x1Ocdiw9uhhJJ2pPcbn_A3jGcr_mE",
        },
      }
    );
    console.log(response);
  };

  onSearchButtonClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="search__form" action="" onSubmit={this.handleSearch}>
          <input
            className="search__input"
            type="text"
            onChange={this.onSearchButtonClick}
          />
          <button className="search__submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
