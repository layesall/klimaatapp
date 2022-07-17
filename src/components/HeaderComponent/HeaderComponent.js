import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text, SafeAreaView, Pressable } from 'react-native'

import Styles from './HeaderComponent.styles'
import { getIcon } from '../../utils/utils'

export default function HeaderComponent() {
  const navigation = useNavigation();
  const route = useRoute().name;

  useEffect(() => {
    handleRoute();
  },[route]);

  const handleRoute = () => {
    if(route !== 'home'){
      return <Pressable onPress={() => navigation.goBack()}>
        {getIcon('long-arrow-left', 'white', 24)}
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