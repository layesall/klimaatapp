import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text, SafeAreaView, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Styles from './HeaderComponent.styles'

export default function HeaderComponent() {
  const navigation = useNavigation();
  const route = useRoute().name;

  useEffect(() => {
    handleRoute();
  },[route]);

  const handleRoute = () => {
    if(route !== 'home'){
      return <Pressable onPress={() => navigation.goBack()}>
        <FontAwesome name='long-arrow-left' color='white' size={24} />
      </Pressable>
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.logoText}>Klimaat</Text>
      { handleRoute() }
    </SafeAreaView>
  )
}