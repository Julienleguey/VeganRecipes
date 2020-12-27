import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import RecipeScreen from "./RecipeScreen";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Recipe" component={RecipeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
