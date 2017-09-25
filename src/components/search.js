import React, { Component
} from 'react';
import Playlist from './playlist'

export default class Search extends Component {
    constructor( props ){
        super( props )
        this.state = {
            playlist: [],
            searchItems: [],
        }

    }
    componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({
              playlist: data,
          });
          })
}

  render() {
      console.log("state", this.state.playlist);
console.log(this.state.playlist[0])
      const list = this.state.playlist.map(list => {
          return (
              <ul  key={list._id} className="thelist">
                  <li className="searchlist"> Username: {list.userName} </li>
                  <li>Artist: {list.songArtist}</li>
                  <li>Song: {list.songTitle}</li>
                  <li>Notes: {list.SongNotes}</li>
              </ul>
              )
      })
    return (
      <div>
          <Playlist playlist={list} />
          
          </div>
    );
  }

}
