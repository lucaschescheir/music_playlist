import React, {
  Component,
} from 'react';
import PlaylistForm from './playlist-form';
import Playlist from './playlist'
import PlaylistItem from './playlist-item'

export default class Home extends Component {

  render() {
    return (
      <div>
          
          <Playlist />
      </div>
    );
  }

}
