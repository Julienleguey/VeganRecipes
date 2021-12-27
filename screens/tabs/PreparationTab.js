import React from "react";
import {
  ScrollView, StyleSheet, Text, View,
} from "react-native";
import RecipeContext from "../RecipeContext";

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

function PreparationScreen() {
  const recipe = React.useContext(RecipeContext);

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

  const displayInstructions = (instructions) => instructions.map((instruction, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Text key={index} style={styles.text}>
      {displayInstruction(instruction)}
    </Text>
  ));

  const displaySections = () => recipe.preparation.map((section, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <View key={index}>
      {section.title ? <Text>{section.title}</Text> : null}
      {displayInstructions(section.instructions)}
    </View>
  ));

  return <ScrollView style={styles.container}>{displaySections()}</ScrollView>;
}

export default PreparationScreen;
