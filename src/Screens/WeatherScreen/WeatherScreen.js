import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import useWeather from "../../hooks/useWeather";
import CardComponent from "../../components/CardComponent/CardComponent";
import Styles from "./WeatherScreen.styles";

export default function HomeScreen() {
  const [isReady, setIsReady] = useState(false);
  const route = useRoute();
  const weather = useWeather(route.params);

  console.log(route.params);
  
  useEffect(() => {
    if ((route.params !== undefined) && (weather !== undefined)) {
      setIsReady(true);
    }
  }, []);
  
  console.log(weather);
  console.log(isReady);
  return (
    <SafeAreaView style={Styles.container}>
      <HeaderComponent />
      <Text>weather screen</Text>
      {isReady ? (
        <CardComponent
          city={weather.name}
          temp={weather.main.temp}
          description={weather.weather[0].description}
          tempMax={weather.main.temp_max}
          tempMin={weather.main.temp_min}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
        />
      ) : null}
    </SafeAreaView>
  );
}
