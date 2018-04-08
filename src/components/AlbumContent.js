import React from 'react';
import { View, Image } from 'react-native';

const AlbumContent = (props) => {
  const { imageStyle, containerStyle } = style;
  return (
    <View style={containerStyle}>
      <Image
        source={{ uri: props.album.image }}
        style={imageStyle}
      />
    </View>
  );
};

const style = {
  imageStyle: {
    width: 250,
    height: 250
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 320,
  }
};

export default AlbumContent;
