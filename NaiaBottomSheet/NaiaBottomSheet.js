import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import BottomSheetModal, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import Animated, {
  useSharedValue,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NaiaButton } from "./../NaiaButton";
import { AddBirthdayPagerView } from "../AddBirthdayPagerView/AddBirthdayPagerView";

export const NaiaBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const bottomSheetPosition = useSharedValue(0);
  const insets = useSafeAreaInsets();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetChanges = useCallback((_, toIndex) => {
    setIsSheetOpen(toIndex === 1);
  }, []);

  const handleOpenPress = () => {
    bottomSheetRef.current.expand();
  };

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} />,
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      onAnimate={handleSheetChanges}
      keyboardBehavior="interactive"
      animatedPosition={bottomSheetPosition}
      topInset={insets.top}
      snapPoints={[125, "100%"]}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetScrollView
        style={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {!isSheetOpen && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <NaiaButton
              onPress={handleOpenPress}
              style={{
                marginBottom: insets.bottom != 0 ? insets.bottom : 16,
                marginTop: 8,
              }}
              label={"Ajouter"}
            />
          </Animated.View>
        )}
        {isSheetOpen && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <AddBirthdayPagerView bottomSheetRef={bottomSheetRef} />
          </Animated.View>
        )}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
