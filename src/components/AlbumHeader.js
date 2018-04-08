import React from 'react';
import { Image, Text, View } from 'react-native';

const AlbumHeader = (props) => {
  const {
    imageStyle, textStyle, containerStyle, titleStyle, artistStyle, titleWrapper
  } = styles;

  return (
    <View style={containerStyle}>
      <Image
        source={{ uri: props.album.thumbnail_image }}
        style={imageStyle}
      />
      <View style={titleWrapper}>
        <Text style={[textStyle, titleStyle]}>{props.album.title}</Text>
        <Text style={[textStyle, artistStyle]}>{props.album.artist}</Text>
      </View>
    </View>
  );
};

const styles = {
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  textStyle: {
    color: 'green'
  },
  titleStyle: {
    fontSize: 20,

  },
  artistStyle: {

  },
  containerStyle: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'rgba(99,184,93, 0.15)',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,

  },
  titleWrapper: {
    // backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 25
  }
};

export default AlbumHeader;
