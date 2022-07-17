import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import { getIcon } from "../../utils/utils";

import Styles from "./FormComponent.styles";

export default function FormComponent() {
  const [inputValue, setInputValue] = useState(undefined);

  return (
    <SafeAreaView style={Styles.container}>
      <TextInput
        value={inputValue}
        placeholder="city name"
        style={Styles.input}
      />
      <Pressable style={Styles.submit}>
        {getIcon("search", "white", 24)}
      </Pressable>
    </SafeAreaView>
  );
}
