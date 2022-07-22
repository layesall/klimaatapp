import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { getIcon } from '../../utils/utils'

import Styles from './CardComponent.styles'

export default function CardComponent({city, temp, description, tempMax, tempMin, humidity, windSpeed}) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.infoPrimeContainer}>
        <Text style={Styles.temperature}>{temp}°</Text>
        <Text style={Styles.city}>{city}</Text>
        <Text style={Styles.description}>{description}</Text>
      </View>
      <ScrollView>
        <View style={Styles.info}>
          <Text style={Styles.infoText}>{"max"}</Text>
        <Text style={Styles.infoText}>{tempMax}°</Text>
        </View>
        <View style={Styles.info}>
          <Text style={Styles.infoText}>{"min"}</Text>
          <Text style={Styles.infoText}>{tempMin}°</Text>
        </View>
        <View style={Styles.info}>
          <Text style={Styles.infoText}>{"humidity"}</Text>
          <Text style={Styles.infoText}>{humidity}%</Text>
        </View>
        <View style={Styles.info}>
          <Text style={Styles.infoText}>{"wind speed"}</Text>
          <Text style={Styles.infoText}>{windSpeed}</Text>
        </View>
      </ScrollView>
    </SafeAreaView> 
  )
}