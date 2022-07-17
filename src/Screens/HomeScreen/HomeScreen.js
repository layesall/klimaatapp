import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Styles from "./HomeScreen.styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <HeaderComponent />
      <Text style={Styles.title}>Home Screen</Text>
    </SafeAreaView>
  );
}
