import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NaiaButton } from "../../NaiaButton";
import { NaiaInput } from "../../NaiaInput";

export const AddLastNameView = ({ key, onPress, lastName, setLastName }) => {
  return (
    <View style={styles.container} key={key}>
      <Text style={styles.title}>Le</Text>
      <Text style={styles.title}>Nom</Text>
      <NaiaInput
        style={styles.input}
        placeholder="Doe"
        value={lastName}
        updateValue={setLastName}
      />
      <NaiaButton style={styles.button} onPress={onPress} label="Suivant" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingVertical: 24,
    display: "flex",
  },
  title: {
    fontSize: 56,
    fontWeight: "900",
    lineHeight: 56,
  },
  button: {
    width: "50%",
    alignSelf: "flex-end",
  },
  input: {
    marginTop: 24,
    marginBottom: 8,
  },
});
