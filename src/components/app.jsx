/* eslint react/prefer-stateless-function: off */
import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: null
      // selectedGif: "1526047932273-341f2a7631f9"
    };

    this.search("flowers");
  }

  selectGif = (gifId) => {
    this.setState({
      selectedGif: gifId
    });
  }

  search = (query) => {
    console.log(process.env.API_UNSPLASH);
    // TODO: API Call
    fetch(`https://api.unsplash.com/search/photos?per_page=10&query=${query}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Accept-Version': 'v1',
        Authorization: `Client-ID ${process.env.API_UNSPLASH}`
      }
    })
      .then(response => response.json())
      .then((data) => {
        const ids = data.results.map((result) => {
          const id = result.urls.small.match(/photo-(.+)\?/)[1];
          return Object.assign({ id });
        });
        console.log(data);
        console.log(ids);
        this.setState({
          gifs: ids
        });
      });
  }

  render() {
    const { selectedGif, gifs } = this.state;

    return (
      <div className="app-container">
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGif} mode="small" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
