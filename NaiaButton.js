import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

export const NaiaButton = ({ style, onPress, label }) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <LinearGradient
        colors={["#66f4d3", "#de91ed"]}
        start={{ x: 0.0, y: 0.9 }}
        end={{ x: 1.0, y: 0.1 }}
        style={styles.button}
      >
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 64,
    width: "100%",
  },
  text: {
    fontWeight: "900",
    color: "white",
    fontSize: 18,
  },
});
