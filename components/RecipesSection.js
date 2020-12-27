import React, {useState} from 'react';
import {
  Image,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

function HomeScreen({navigation, sectionName, data}) {
  const [open, setOpen] = useState(false);

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Recipe', {
          name: item.name,
          recipe: item,
        })
      }>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.sectionContainer}>
      <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
        <View style={styles.sectionButton}>
          <Text style={styles.sectionTitle}>{sectionName}</Text>
          <Image
            source={require('../assets/arrow.png')}
            style={[
              styles.arrow,
              {transform: [{rotate: open ? '180 deg' : '0 deg'}]},
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        vertical
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{width: 8}} />}
        style={{display: open ? 'flex' : 'none'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
  sectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 24,
  },
  arrow: {
    width: 24,
    height: 24,
  },
  recipeContainer: {
    marginTop: 4,
    paddingVertical: 4,
    paddingLeft: 16,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 1,
    borderStyle: 'dashed',
  },
  recipeName: {
    fontSize: 18,
  },
});

export default HomeScreen;
