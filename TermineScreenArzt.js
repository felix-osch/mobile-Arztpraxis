import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

// Array of appointments, each appointment contains patient, date and notes
const appointments = [
  {
    patient: "Huber Karl",
    time: "08:00",
    notes: "Kariesentfernung",
  },
  {
    patient: "Klein Franz",
    time: "08:30",
    notes: "Zahnsteinentfernung",
  },
  {
    patient: "Schmidt Anna",
    time: "09:00",
    notes: "Zahnspange",
  },
  {
    patient: "Li Min",
    time: "09:30",
    notes: "Zahnspange",
  },
  {
    patient: "Gries Gudrun",
    time: "10:00",
    notes: "Zahnspange",
  },
  {
    patient: "Müller Heimo",
    time: "10:30",
    notes: "Zahn ziehen",
  },
  {
    patient: "Los Klaus",
    time: "11:00",
    notes: "Kariesentfernung",
  },
  {
    patient: "Carlo Timo",
    time: "11:30",
    notes: "Zahnspange",
  },
  {
    patient: "Weber Florian",
    time: "12:00",
    notes: "Zahnsteinentfernung",
  },
  {
    patient: "Groß Heinz",
    time: "14:30",
    notes: "Kontrolluntersuchung",
  },
  {
    patient: "Park Jean",
    time: "15:00",
    notes: "Kariesentfernung",
  },
  {
    patient: "Zieber Lisa",
    time: "15:30",
    notes: "Zahnsteinentfernung",
  },
  {
    patient: "Mann Johanna",
    time: "16:00",
    notes: "Zahn ziehen",
  },
];

//Component that displays the appointments from the doctor's point of view
const TermineScreenArzt = ({ handleScreenChange }) => {
  const [selected, setSelected] = useState("");

  //Returns the current Date
  const getCurrentDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  //Config the Calender to German
  useEffect(() => {
    LocaleConfig.locales["de"] = {
      monthNames: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      monthNamesShort: [
        "Jan.",
        "Feb.",
        "März",
        "Apr.",
        "Mai",
        "Juni",
        "Juli",
        "Aug.",
        "Sept.",
        "Okt.",
        "Nov.",
        "Dez.",
      ],
      dayNames: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
      ],
      dayNamesShort: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
      today: "Heute",
    };

    LocaleConfig.defaultLocale = "de";

    setSelected(getCurrentDate());
  }, []);

  //Formats the Date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  //Prints the Date
  const renderDayMessage = (dateString) => {
    return `Deine Termine für ${formatDate(dateString)}:`;
  };

  //When pressing on one of the listed appointments
  const handleOpenAppointment = (screen) => {
    handleScreenChange(screen);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
        style={{ width: 350, height: 360 }}
      />
      <Text style={styles.text}>{renderDayMessage(selected)}</Text>
      <View style={styles.separator} />
      <FlatList
        data={appointments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.appointmentItem}
            onPress={() => handleOpenAppointment("terminUebersichtArzt")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16 }}>
                {item.time}: {item.patient}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "grey",
                  fontStyle: "italic",
                  marginLeft: 10,
                }}
              >
                {item.notes}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

// Stylesheet for the TermineScreenArzt component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    margin: 10,
    marginBottom: 15,
  },
  appointmentItem: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#000",
  },
});

export default TermineScreenArzt;
