import React from 'react';
import { View, Button, Text, Linking } from 'react-native';

const AlbumAction = (props) => {
  const { containerStyle, buttonStyle } = style;
  return (
    <View style={containerStyle}>
    <Button
      title="Acheter l'album"
      style={buttonStyle}
      color='#63b85d'
      onPress={() => Linking.openURL(props.album.url)}
    />
    </View>
  );
};

const style = {
  containerStyle: {
    height: 60,
    justifyContent: 'flex-start'
  },
  buttonStyle: {
    color: '#63b85d'
  }
};

export default AlbumAction;
