import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { AddFirstNameView } from "./Views/AddFirstNameView";
import { AddLastNameView } from "./Views/AddLastNameView";
import { AddBirthdayDateView } from "./Views/AddBirthdayDateView";
import { insertBirthday } from "../db";

export const AddBirthdayPagerView = ({ bottomSheetRef }) => {
  const pageViewerRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));

  const handleSubmit = () => {
    insertBirthday(firstName, lastName, date);
    bottomSheetRef.current.collapse();
  };

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
        firstName={firstName}
        setFirstName={setFirstName}
      />
      <AddLastNameView
        key={2}
        onPress={() => pageViewerRef.current.setPage(2)}
        lastName={lastName}
        setLastName={setLastName}
      />
      <AddBirthdayDateView
        key={3}
        onPress={handleSubmit}
        date={date}
        setDate={setDate}
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
