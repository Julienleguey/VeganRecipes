import React, { useEffect } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  activateKeepAwake,
  deactivateKeepAwake,
} from "@sayem314/react-native-keep-awake";
import { RecipeContext } from "./RecipeContext";
import IngredientsTab from "./tabs/IngredientsTab";
import PreparationTab from "./tabs/PreparationTab";
import Grocery from "../assets/grocery.svg";
import Cooking from "../assets/cooking.svg";

const Tab = createBottomTabNavigator();

function RecipeScreen({ route }) {
  useEffect(() => {
    activateKeepAwake();

    return () => deactivateKeepAwake();
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <RecipeContext.Provider value={route.params.recipe}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Ingredients"
            component={IngredientsTab}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Grocery width={32} height={32} />
              ),
            }}
          />
          <Tab.Screen
            name="Preparation"
            component={PreparationTab}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Cooking width={32} height={32} />
              ),
            }}
          />
        </Tab.Navigator>
      </RecipeContext.Provider>
    </View>
  );
}

export default RecipeScreen;
