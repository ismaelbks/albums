// Import libaries for making a componnent
import React from 'react';
import { Text, View } from 'react-native';

// Make a components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      return <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#63b85d',
    justifyContent: 'flex-end',
    height: 70,
    alignItems: 'center',
    paddingBottom: 7.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.2

  },
  textStyle: {
    fontSize: 30,
    color: '#FFF'
  }
};

// Make the componenent available to other parts of the app
export default Header;
