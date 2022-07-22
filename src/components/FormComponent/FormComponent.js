import { useNavigation } from "@react-navigation/native";
import React, {useState } from "react";
import { Button, SafeAreaView, TextInput } from "react-native";

import Styles from "./FormComponent.styles";

export default function FormComponent() {
  const [inputValue, setInputValue] = useState(undefined);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.container}>
      <TextInput
        defaultValue={inputValue}
        placeholder="city name"
        style={Styles.input}
        onChangeText={(city) => setInputValue(city)}
      />
      <Button title="valider" style={Styles.submit} onPress={() => navigation.navigate('weather', inputValue)} />
    </SafeAreaView>
  );
}
