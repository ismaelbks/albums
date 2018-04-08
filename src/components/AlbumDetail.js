import React from 'react';
import { View } from 'react-native';
import AlbumHeader from './AlbumHeader';
import AlbumContent from './AlbumContent';
import AlbumAction from './AlbumAction';

const AlbumDetail = (props) => {
  const { container } = styles;

  return (
    <View style={container}>
      <AlbumHeader album={props.album} />
      <AlbumContent album={props.album} />
      <AlbumAction album={props.album} />
    </View>
  );
};

const styles = {
  container: {
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginHorizontal: 15,
    marginVertical: 20,
    height: 460
  }
};

export default AlbumDetail;
