import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    const albumsPromise = fetch('https://rallycoding.herokuapp.com/api/music_albums')
    albumsPromise
      .then(response => response.json())
      .then(data => this.setState({albums: data}))
      .catch((err) => {
        console.error(err);
      })
  }

  renderAlbums() {
    albums = this.state.albums
    return albums.map(album => <AlbumDetail key={album.title} album={album}/>)
  }
  // in a class based component, must have at least one method, render
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;
