import dayjs from "dayjs";
import { atom, createStore } from "jotai";

export const birthdaysAtom = atom([]);
export const sortedBirthdaysAtom = atom((get) => {
  const sorted = [];
  const bdays = get(birthdaysAtom);

  bdays.forEach((bday) => {
    const group = sorted.find((item) => {
      return item.title == dayjs(bday.date).format("MMMM");
    });

    if (group === undefined) {
      sorted.push({
        title: dayjs(bday.date).format("MMMM"),
        data: [bday],
      });
    } else {
      group.data.push(bday);
    }
  });

  return sorted;
});

export const store = createStore();
