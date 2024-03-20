import React, { useEffect } from "react";
import {
  StatusBar,
  SafeAreaView,
  SectionList,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NaiaBottomSheet } from "./NaiaBottomSheet/NaiaBottomSheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBirthdayTable, fetchBirthdays } from "./db";
import { Provider, useAtomValue } from "jotai";
import { sortedBirthdaysAtom, store } from "./state";
import { NaiaBdayRow } from "./NaiaBdayRow";
import { AppBar } from "./AppBar";

const Scaffold = () => {
  useEffect(() => {
    createBirthdayTable();
  }, []);

  return (
    <Provider store={store}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </Provider>
  );
};

const App = () => {
  const bdays = useAtomValue(sortedBirthdaysAtom);

  useEffect(() => {
    fetchBirthdays();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <AppBar />
        <View style={styles.listContainer}>
          <SectionList
            sections={bdays}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => (
              <NaiaBdayRow
                first_name={item.first_name}
                last_name={item.last_name}
                date={item.date}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.header}>
                <View style={styles.headerSeparator} />
                <Text style={styles.headerText}>{title}</Text>
              </View>
            )}
            stickySectionHeadersEnabled={true}
          />
        </View>
      </SafeAreaView>
      <NaiaBottomSheet />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    alignItems: "center",
  },
  headerSeparator: {
    height: 2,
    width: "100%",
    backgroundColor: "#EFF1F6",
    flexShrink: 1,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 18,
    marginLeft: "auto",
  },
});

export default Scaffold;
