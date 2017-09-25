import React, { Component } from 'react';
import NavBar from './components/navbar';
import Playlist from './components/playlist';
import PlaylistForm from './components/playlist-form'
import PlaylistItem from './components/playlist-item'
import Welcome from './components/help';
import Search from './components/search';
import Home from './components/home';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
constructor(props){
    super(props)
    this.state={
        playlist: []
    }
}






render(){
    return (
            <div className="App">
                <NavBar />

                <switch>
                    <Route path="/search" component={Search} />
                    <Route path="/home" component={PlaylistForm} />
                    <Route path="/playlist" component={Home} />
                </switch>
            </div>
    );
}
}



export default App;
