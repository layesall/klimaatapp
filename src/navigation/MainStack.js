import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import WeatherScreen from "../screens/WeatherScreen/WeatherScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="about" component={AboutScreen} />
          <Stack.Screen name="weather" component={WeatherScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
    </> 
  );
}
