import React from "react";
import { StyleSheet } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

export const NaiaInput = ({
  style,
  placeholder,
  value,
  updateValue,
  autofocus,
}) => {
  return (
    <BottomSheetTextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={updateValue}
      autoFocus={autofocus}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    fontSize: 18,
    height: 64,
    padding: 8,
    width: "100%",
    backgroundColor: "rgba(151, 151, 151, 0.05)",
    borderColor: "rgba(151, 151, 151, 0.05)",
    borderWidth: 2,
  },
});
