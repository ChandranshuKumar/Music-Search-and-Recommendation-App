import React, { Component } from 'react';

import './App.css';
import { getInfo } from './utility';

class App extends Component {

  state = {
    artistSearch: "",
    artistInfo: {}
  }

  onArtistChange = e => {
    this.setState({ artistSearch: e.target.value })
  }

  onSubmit = () => {
    getInfo(this.state.artistSearch).then(res => {
      this.setState({ artistInfo: res });
      console.log(this.state.artistInfo)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="SearchDiv">
          <h1>Search for Artists</h1>
          <input type="text" value={this.state.artistSearch} onChange={e => this.onArtistChange(e)} />
          <button onClick={this.onSubmit}>Search</button>
        </div>
        {typeof this.state.artistInfo.artist !== "undefined" ?
          <div className="Info">
            <h1>Results for searched artist "{this.state.artistSearch}"</h1>
            <div className="InfoDetails">
              <img src={this.state.artistInfo.artist.image[3]["#text"]} alt="Artist"/>
              <div>
                <p style={{fontSize:'20px',fontWeight:'600'}}>{this.state.artistInfo.artist.name}</p>
                <p dangerouslySetInnerHTML={{__html : this.state.artistInfo.artist.bio.summary}}></p>
              </div>
            </div>
          </div> : null}
      </div>
    )
  }
}

export default App;
