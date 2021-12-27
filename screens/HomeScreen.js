import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import brunchs from "../data/brunchs.json";
import dips from "../data/dips.json";
import mains from "../data/mains.json";
import soups from "../data/soups.json";
import RecipesSection from "../components/RecipesSection";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <RecipesSection
        sectionName="Brunchs"
        data={brunchs}
        navigation={navigation}
      />

      <RecipesSection
        sectionName="Dips"
        data={dips}
        navigation={navigation}
      />

      <RecipesSection
        sectionName="Plats"
        data={mains}
        navigation={navigation}
      />

      <RecipesSection
        sectionName="Soupes"
        data={soups}
        navigation={navigation}
      />
    </ScrollView>
  );
}

export default HomeScreen;
