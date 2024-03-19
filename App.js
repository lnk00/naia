import React, { useEffect, useState } from "react";
import { StatusBar, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NaiaBottomSheet } from "./NaiaBottomSheet/NaiaBottomSheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBirthdayTable, getBirthdays } from "./db";

createBirthdayTable();

const App = () => {
  const [bdays, setBdays] = useState([]);

  useEffect(() => {
    const fetchBdays = async () => setBdays(await getBirthdays());
    fetchBdays();
  }, []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    </BottomSheetModalProvider>
  );
};

export default App;
