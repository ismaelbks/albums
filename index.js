// Import a library to help building a component
import React from 'react';
import {
  Text,
  AppRegistry,
  View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a components
const App = () => (
  <View>
    <Header headerText={'Peperoni Cafe'} />
    <AlbumList />
  </View>
);

// Render that component
AppRegistry.registerComponent('albums', () => App);
