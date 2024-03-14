import React from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NaiaBottomSheet } from "./NaiaBottomSheet/NaiaBottomSheet";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <NaiaBottomSheet />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
