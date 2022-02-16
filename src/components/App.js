import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import axios from "axios";

class App extends React.Component {
  state = { items: [] };

  handleSearch = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?",
      {
        params: {
          q: term,
          key: "AIzaSyDNe8x1Ocdiw9uhhJJ2pPcbn_A3jGcr_mE",
        },
      }
    );
    this.setState({ items: response.data.items });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}></SearchBar>
        <BookList items={this.state.items}></BookList>
      </div>
    );
  }
}

export default App;
