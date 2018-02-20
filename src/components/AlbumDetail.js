import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
// import {Card} from 'react-native-elements'

const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumnailStyle,
    headerContentStyle,
    thumnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image style={thumnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>
      <CardSection>

      </CardSection>
    </Card>
  )
};

styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
