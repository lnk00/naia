import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import settingsIcon from "./assets/settings.png";
import { LinearGradient } from "expo-linear-gradient";

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ce mois,</Text>
        <Text style={styles.subTitle}>4 anniversaires</Text>
      </View>

      <TouchableOpacity>
        <LinearGradient
          colors={["#66f4d3", "#de91ed"]}
          start={{ x: 0.0, y: 0.9 }}
          end={{ x: 1.0, y: 0.1 }}
          style={styles.settingButton}
        >
          <Image
            style={styles.settingIcon}
            source={settingsIcon}
            tintColor={"#ffffff"}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingTop: 8,
    paddingHorizontal: 24,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  settingButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 8,
  },
  settingIcon: {
    height: 24,
    width: 24,
  },
});
