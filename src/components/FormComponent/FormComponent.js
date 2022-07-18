import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
} from "react-native";

import useWeather from '../../hooks/useWeather'
import CardComponent from "../CardComponent/CardComponent";
import Styles from "./FormComponent.styles";

export default function FormComponent() {
  const [inputValue, setInputValue] = useState(undefined);

  const weather = useWeather(inputValue);

  console.log(weather);

  return (
    <SafeAreaView style={Styles.container}>
      <TextInput
        defaultValue={inputValue}
        placeholder="city name"
        style={Styles.input}
        onChangeText={(city) => setInputValue(city)}
        onSubmitEditing={() => console.log(inputValue)}
      />
      <CardComponent city={weather.name} humidity={weather.main.humidity} temp={weather.main.temp} windSpeed={weather.wind.speed} />
    </SafeAreaView>
  );
}
