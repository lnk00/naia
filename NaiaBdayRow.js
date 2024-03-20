import React from "react";
import { StyleSheet, View, Text } from "react-native";
import dayjs from "dayjs";

export const NaiaBdayRow = ({ first_name, last_name, date, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.initialContainer}>
        <Text style={styles.initial}>{first_name[0] + last_name[0]}</Text>
      </View>

      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{first_name}</Text>
          <Text style={styles.name}>{last_name}</Text>
        </View>
        <Text style={styles.date}>{dayjs(date).format("DD MMMM YY")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  initialContainer: {
    backgroundColor: "#EFF1F6",
    borderRadius: 8,
    height: 56,
    width: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  initial: {
    fontWeight: "800",
    fontSize: 16,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
});
