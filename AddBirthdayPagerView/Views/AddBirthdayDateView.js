import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NaiaButton } from "../../NaiaButton";
import DateTimePicker from "@react-native-community/datetimepicker";

export const AddBirthdayDateView = ({ key, onPress }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  return (
    <View style={styles.container} key={key}>
      <Text style={styles.title}>Date de</Text>
      <Text style={styles.title}>Naissance</Text>
      <DateTimePicker
        style={styles.picker}
        value={date}
        mode={"date"}
        onChange={() => {}}
        display="spinner"
      />
      <NaiaButton style={styles.button} onPress={onPress} label="Ajouter" />
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
    textAlign: "center",
  },
  picker: {
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
});
