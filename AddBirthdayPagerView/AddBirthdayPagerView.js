import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { AddFirstNameView } from "./Views/AddFirstNameView";
import { AddLastNameView } from "./Views/AddLastNameView";
import { AddBirthdayDateView } from "./Views/AddBirthdayDateView";

export const AddBirthdayPagerView = ({ bottomSheetRef }) => {
  const pageViewerRef = useRef(null);

  return (
    <PagerView
      ref={pageViewerRef}
      style={styles.container}
      initialPage={0}
      scrollEnabled={false}
    >
      <AddFirstNameView
        key={1}
        onPress={() => pageViewerRef.current.setPage(1)}
      />
      <AddLastNameView
        key={2}
        onPress={() => pageViewerRef.current.setPage(2)}
      />
      <AddBirthdayDateView
        key={3}
        onPress={() => bottomSheetRef.current.collapse()}
      />
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: 1000,
  },
});
