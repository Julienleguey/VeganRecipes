import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RecipeContext} from './RecipeContext';
import IngredientsTab from './tabs/IngredientsTab';
import PreparationTab from './tabs/PreparationTab';
import Grocery from '../assets/grocery.svg';
import Cooking from '../assets/cooking.svg';

const Tab = createBottomTabNavigator();

function RecipeScreen({navigation, route}) {
  useEffect(() => {
    console.log('mounting');

    return () => console.log('unmounting');
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <RecipeContext.Provider value={route.params.recipe}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Ingredients"
            component={IngredientsTab}
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Grocery width={32} height={32} />
              ),
            }}
          />
          <Tab.Screen
            name="Preparation"
            component={PreparationTab}
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <Cooking width={32} height={32} />
              ),
            }}
          />
        </Tab.Navigator>
      </RecipeContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  tabImgContainer: {
    width: 32,
    height: 32,
  },
  tabImg: {
    width: '100%',
    height: '100%',
  },
});

export default RecipeScreen;
