/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions, Image } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Feed extends Component {
  render() {
    const fotos = [
      { id: 1, usuario: 'rafael' },
      { id: 2, usuario: 'alberto' },
      { id: 3, usuario: 'vitor' }
    ];
    return (
          <View>
            {fotos.map(foto =>
              <Text>{foto.usuario}</Text>
              <Image source={require('../../resources/img/alura.png')}
                style={{width: width, height: width}} />
            )}
          </View>
    );
  }
}
