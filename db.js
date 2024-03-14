import { openDatabase } from "expo-sqlite";

export const db = openDatabase("naia");
db.transaction(
  (tx) =>
    tx.executeSql(
      "create table if not exists birthdays (id integer primary key not null, first_name text, last_name text, date text);",
    ),
  (err) => console.log(err),
);

export const deleteBirthdaysRows = () => {
  db.transaction(
    (tx) => {
      tx.executeSql("DELETE FROM birthdays;", [], () => {});
    },
    (err) => console.log(err),
  );
};

export const dropBirthdaysTable = () => {
  db.transaction(
    (tx) => {
      tx.executeSql("DROP TABLE IF EXISTS birthdays;", [], () => {});
    },
    (err) => console.log(err),
  );
};

export const getBirthdays = () => {
  db.transaction(
    (tx) =>
      tx.executeSql("select * from birthdays;", [], (_, { rows }) =>
        console.log(rows),
      ),
    (err) => console.log(err),
  );
};

export const insertBirthday = (firstName, lastName, date) => {
  db.transaction(
    (tx) =>
      tx.executeSql(
        "insert into birthdays (first_name, last_name, date) values (?, ?, ?)",
        [firstName, lastName, date.toISOString()],
      ),
    (err) => console.log(err),
  );
};
