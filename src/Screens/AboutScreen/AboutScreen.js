import React from 'react';
import {View, Text} from 'react-native';

import Styles from './AboutScreen.styles';

export default function AboutScreen(){
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>About Screen</Text>
    </View>
  );
}
