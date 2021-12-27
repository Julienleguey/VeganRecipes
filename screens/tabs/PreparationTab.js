import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RecipeContext } from "../RecipeContext";

function PreparationScreen() {
  const recipe = React.useContext(RecipeContext);

  const displaySections = () => {
    return recipe.preparation.map((section, index) => (
      <View key={index}>
        {section.title ? <Text>{section.title}</Text> : null}
        {displayInstructions(section.instructions)}
      </View>
    ));
  };

  const displayInstructions = (instructions) => {
    return instructions.map((instruction, index) => (
      <Text key={index} style={styles.text}>
        {displayInstruction(instruction)}
      </Text>
    ));
  };

  const displayInstruction = (instruction) => {
    const index = instruction.indexOf(" ");
    const firstWord = instruction.substring(0, index);
    const rest = instruction.substring(index);

    return (
      <Text>
        <Text style={styles.firstWord}>{firstWord}</Text>
        {rest}
      </Text>
    );
  };

  return <ScrollView style={styles.container}>{displaySections()}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    lineHeight: 26,
  },
  firstWord: {
    fontWeight: "700",
  },
});

export default PreparationScreen;
