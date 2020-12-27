import React, {useState} from 'react';
import {
  Image,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import brunchs from '../data/brunchs.json';
import dips from '../data/dips.json';
import mains from '../data/mains.json';
import soups from '../data/soups.json';
import RecipesSection from '../components/RecipesSection';

function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <RecipesSection
        sectionName="Brunchs"
        data={brunchs}
        navigation={navigation}
      />

      <RecipesSection sectionName="Dips" data={dips} navigation={navigation} />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default HomeScreen;
