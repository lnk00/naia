import React from "react";
import { StatusBar, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NaiaBottomSheet } from "./NaiaBottomSheet/NaiaBottomSheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
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
            <Text>Test</Text>
          </SafeAreaView>
          <NaiaBottomSheet />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </BottomSheetModalProvider>
  );
};

export default App;
