import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import FormComponent from "../../components/FormComponent/FormComponent";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Styles from "./HomeScreen.styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <HeaderComponent />
      <FormComponent />
    </SafeAreaView>
  );
}
