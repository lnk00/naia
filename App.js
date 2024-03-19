import React, { useEffect } from "react";
import { StatusBar, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NaiaBottomSheet } from "./NaiaBottomSheet/NaiaBottomSheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBirthdayTable, deleteBirthdaysRows, fetchBirthdays } from "./db";
import { Provider, useAtomValue } from "jotai";
import { birthdaysAtom, store } from "./state";

const Scaffold = () => {
  useEffect(() => {
    createBirthdayTable();
    // TODO: delete this line when dev is finished
    deleteBirthdaysRows();
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
  const bdays = useAtomValue(birthdaysAtom);

  useEffect(() => {
    fetchBirthdays();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {bdays.map((bday, i) => (
          <Text key={i}>{bday.first_name}</Text>
        ))}
      </SafeAreaView>
      <NaiaBottomSheet />
    </GestureHandlerRootView>
  );
};

export default Scaffold;
