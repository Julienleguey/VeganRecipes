import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RecipeContext} from '../RecipeContext';

function IngredientsScreen() {
  const recipe = React.useContext(RecipeContext);

  const displayLists = () => {
    return recipe.ingredientsLists.map((list, index) => (
      <View key={index} style={{paddingBottom: 24}}>
        {displayList(list)}
      </View>
    ));
  };

  const displayList = list => (
    <View>
      {list.title ? <Text style={styles.title}>{list.title}</Text> : null}
      {displayIngredients(list.ingredients)}
    </View>
  );

  const displayIngredients = ingredients => {
    return ingredients.map((ingredient, index) => (
      <Text key={index} style={styles.text}>
        {'\u2022'} {ingredient}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.author}>Par {recipe.author}</Text>
        <Text style={styles.text}>{recipe.quantity}</Text>
        {displayLists()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  author: {
    fontSize: 24,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    lineHeight: 24,
  },
});

export default IngredientsScreen;
