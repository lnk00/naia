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
    console.log(bdays);
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(bdays));
  }, [bdays]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <SectionList
            sections={bdays}
            keyExtractor={(_, index) => index}
            renderItem={({ item, index, section }) => (
              <NaiaBdayRow
                first_name={item.first_name}
                last_name={item.last_name}
                date={item.date}
                style={{
                  marginBottom: index !== section.data.length - 1 ? 24 : 0,
                }}
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
    paddingHorizontal: 24,
  },
  header: {
    height: 48,
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
    fontWeight: "800",
    fontSize: 18,
    marginLeft: "auto",
  },
});

export default Scaffold;
