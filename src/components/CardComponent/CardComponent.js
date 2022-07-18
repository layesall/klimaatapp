import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { getIcon } from '../../utils/utils'

import Styles from './CardComponent.styles'

export default function CardComponent({city, temp, humidity, windSpeed}) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.infoPrimeContainer}>
        <Text>{getIcon('cloud', 'black', 70)}</Text>
        <Text style={Styles.city}>{city}</Text>
        <Text style={Styles.temperature}>{temp}</Text>
      </View>
      <View style={Styles.infoSecondContainer}>
        <Text style={Styles.info}>{humidity}</Text>
        <Text style={Styles.info}>{windSpeed}</Text>
      </View>
    </SafeAreaView>
  )
}