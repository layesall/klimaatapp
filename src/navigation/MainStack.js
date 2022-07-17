import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import AboutScreen from "../Screens/AboutScreen/AboutScreen";

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="about" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
