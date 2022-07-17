import React from 'react';
import {View, Text} from 'react-native';

import Styles from './HomeScreen.styles';

export default function HomeScreen(){
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Home Screen</Text>
    </View>
  );
}
