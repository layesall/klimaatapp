import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import {getIcon} from "../utils/utils";
import colors from "../theme/colors";

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="home" component={HomeScreen} options={{ tabBarIcon: () => getIcon('home', colors.primary, 24) }} />
          <Tab.Screen name="about" component={AboutScreen} options={{ tabBarIcon: () => getIcon('user', colors.primary, 24) }}  />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
