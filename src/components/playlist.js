import React, { Component } from 'react';
import PlaylistItem from './playlist-item';
import PlaylistForm from './playlist-form';
import listitem from './playlist-form'
import Search from './search';
import _ from 'lodash';

class Playlist extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: "",
          id: +1,
          username: '',
          artist: '',
          song: '',
          notes: '',
          Playlistitems: [],
          result: [],
          el: '',
          searchItems: [],
      }


    }
    componentDidMount(){

    }

    handleUserChange(event){
      this.setState({username:event,})
      const search = this.props.playlist;
      const user= this.state.username;
  fetch(`https://itunes.apple.com/search?term=${user}`)
    .then(function(response){
      return response.json();
    })

    .then(data => {
      console.log(data.results);

      this.setState({
          searchItems: data.results
      })
  })
  }

  // let result;
  // for(let i = 0; i < search.length; i ++){
  //     let res = search[i].props.children[1].props.children[1].split("");
  //     let name= search[i].props.children[0].props.children[1].split("");
  //     let songT= search[i].props.children[2].props.children[1].split("");
  //     for(let x = 0; x < res.length; x ++){
  //         if(res[x] === user[x]){
  //
  //             this.setState({result: search[i]})
  //         }
  //     }
  // }



    handleArtistChange(event){
      this.setState({artist: event,})

    }
    handleSongChange(event){
        this.setState({song:event,})
    }
handleClick(event){
}

render() {

    const list = this.state.searchItems.map(list => {
        return (
            <ul  key={list.trackId} id="thelist">
                <li className="searchlist"> Username: {this.state.userName} </li>
                <li>Artist: {list.artistName}</li>
                <li>Song: {list.trackName}</li>
                <li>Notes: {list.collectionName}</li>
            </ul>
            )
    })
    return (

          <section id="display">
              <div className="playlist_form">

                  <form >
                      <label>Search Playist:
                          <input type="text" name="username"
                              value={this.state.username}
                              onChange={(event) => this.handleUserChange(event.target.value)} placeholder="Search for songs by Artist..." />
                      </label>

                  </form>
                  <button id="button" name="button" onClick={(event) => this.handleClick(event)}>Search</button>
                  <audio id="music-player" controls="controls" src=""></audio>

              </div>
              <div className="playlist">

                  {list}

              </div>

          </section>
    );
}
}

export default Playlist;
