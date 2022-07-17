import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Styles from "./AboutScreen.styles";

export default function AboutScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <HeaderComponent />
      <Text style={Styles.title}>About Screen</Text>
    </SafeAreaView>
  );
}
