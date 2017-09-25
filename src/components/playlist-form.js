import React, {Component} from 'react';
import PlaylistItem from './playlist-item';
import Playlist from './playlist';
import App from '../App'


class PlaylistForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            id: +1,
            username: '',
            artist: '',
            song: '',
            notes: '',
            Playlistitems: [],

        }
      }

      handleClick(event){

        const items = this.state.Playlistitems.concat([{
            id:this.state.id++,
            username:this.state.username,
            artist:this.state.artist,
            song: this.state.song,
            notes: this.state.notes,

        }]);
        this.setState({
            Playlistitems: items,
            value: '',
            username: '',
            artist: '',
            song: '',
            notes: '',

        });
        console.log('it clicked')
    }
        handleUserChange(event){
          this.setState({username:event,})


        }
        handleArtistChange(event){
          this.setState({artist: event,})

        }
        handleSongChange(event){
            this.setState({song:event,})
        }
        handleNotesChange(event){
            this.setState({notes: event,})
        }

  render() {

console.log(this.state.Playlistitems[0])

        const listitems = this.state.Playlistitems.map((list)=> {
            return (
                <ul  key={list.id} id="thelist">
                    <li> Username: {list.username} </li>
                    <li>Artist: {list.artist}</li>
                    <li>Song: {list.song}</li>
                    <li>Notes: {list.notes}</li>
                </ul>
                )
        })

    return (
<section id="display">
    <div className="playlist_form">

        <form >
            <label>Username:
                <input type="text" name="username"
                    value={this.state.username}
                    onChange={(event) => this.handleUserChange(event.target.value)}  />
            </label>

            <label>Artist:
                <input type="text" name="artist"
                    value={this.state.artist}
                    onChange={event => this.handleArtistChange(event.target.value)} />
            </label>

            <label>Song/Title:
                <input type="text" name="song"
                    value={this.state.song}
                    onChange={event => this.handleSongChange(event.target.value)} />
            </label>
            <label>Notes
                <input id="text_area" type="text" name="notes"
                    value={this.state.notes}
                    onChange={(event) => this.handleNotesChange(event.target.value)} />
            </label>

        </form>
        <button id="button" name="button" onClick={(event) => this.handleClick(event)}>Submit</button>

    </div>
    <div className="playlist">

        {listitems}
    </div>
    </section>
    )
    }
    }

export default PlaylistForm;
