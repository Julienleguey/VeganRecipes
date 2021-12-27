import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";

const HomeStack = createStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "cornsilk",
  },
};

function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Recipe"
          component={RecipeScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
