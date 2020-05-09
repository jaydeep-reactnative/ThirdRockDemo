import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/modules/homeScreen/HomeScreen";
import DetailScreen from "./app/modules/detailScreen/DetailScreen";

export default function App() {
  return <AppContainer />;
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    DetailScreen: DetailScreen,
  },
  {
    initialRouteName: "HomeScreen",
  }
);

const AppContainer = createAppContainer(AppNavigator);
