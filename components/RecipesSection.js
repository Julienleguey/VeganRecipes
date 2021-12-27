import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import arrow from "../assets/arrow.png";

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 16,
  },
  sectionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightgray",
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
    marginTop: 8,
    paddingVertical: 4,
    paddingLeft: 16,
    borderWidth: 2,
    borderColor: "lightgray",
    borderRadius: 1,
    borderStyle: "dashed",
  },
  recipeName: {
    fontSize: 18,
  },
});

function RecipesSection({ navigation, sectionName, data }) {
  const [open, setOpen] = useState(false);

  const renderItem = (item, index) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", {
        name: item.name,
        recipe: item,
      })}
      key={index}
    >
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItems = () => data.map((item, index) => renderItem(item, index));

  return (
    <View style={styles.sectionContainer}>
      <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
        <View style={styles.sectionButton}>
          <Text style={styles.sectionTitle}>{sectionName}</Text>
          <Image
            source={arrow}
            style={[
              styles.arrow,
              { transform: [{ rotate: open ? "180 deg" : "0 deg" }] },
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={{ display: open ? "flex" : "none" }}>{renderItems()}</View>
    </View>
  );
}

export default RecipesSection;
