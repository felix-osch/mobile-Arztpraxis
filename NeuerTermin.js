import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Calendar, LocaleConfig } from "react-native-calendars";

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

const doctors = [
  {
    name: " -   kein Arzt ausgewählt",
    specialization: "",
  },
  {
    name: "Dr. Huber",
    specialization: "Ophthalmologe",
  },
  {
    name: "Dr. Klein",
    specialization: "Kardiologe",
  },
  {
    name: "Dr. Schmidt",
    specialization: "Dermatologe",
  },
  {
    name: "Dr. Senn",
    specialization: "Psychologin",
  },
  {
    name: "Dr. Gries",
    specialization: "Allgemeinmediziner",
  },
  {
    name: "Dr. Müller",
    specialization: "Internist",
  },
  {
    name: "Dr. Lee",
    specialization: "Orthopäde",
  },
  {
    name: "Dr. Carlo",
    specialization: "Zahnarzt",
  },
  {
    name: "Dr. Weber",
    specialization: "Psychologin",
  },
  {
    name: "Dr. Groß",
    specialization: "Allgemeinmediziner",
  },
  {
    name: "Dr. Park",
    specialization: "Neurologin",
  },
  {
    name: "Dr. Zieber",
    specialization: "Psychologin",
  },
  {
    name: "Dr. Mann",
    specialization: "Allgemeinmediziner",
  },
  {
    name: "Dr. Sonne",
    specialization: "Psychologe",
  },
  {
    name: "Dr. Gaus",
    specialization: "Allgemeinmedizinerin",
  },
  {
    name: "Dr. House",
    specialization: "Neurologe",
  },
  {
    name: "Dr. Ziller",
    specialization: "Kardiologe",
  },
  {
    name: "Dr. Frau",
    specialization: "Allgemeinmedizinerin",
  },
];

const freeDates = {
  "2023-05-26": {
    selected: true,
    selectedColor: "lightgreen",
  },
  "2023-05-29": {
    selected: true,
    selectedColor: "lightgreen",
  },
  "2023-05-30": {
    selected: true,
    selectedColor: "lightgreen",
  },
  "2023-06-06": {
    selected: true,
    selectedColor: "lightgreen",
  },
  "2023-06-07": {
    selected: true,
    selectedColor: "lightgreen",
  },
};

const NeuerTermin = ({ handleScreenChange }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].name);
  const [clickedDay, setclickedDay] = useState("");

  const [message, setMessage] = useState("");

  //const [showInput, setShowInput] = useState(false);

  const handleDayPress = (day) => {
    setclickedDay(day.dateString);
    //setShowInput(!!freeDates[day.dateString]);
  };

  const handleSendButton = (screen) => {
    handleScreenChange(screen);
  };

  const getMarkedDates = () => {
    let dates = { ...freeDates };
    if (dates[clickedDay]) {
      // Wenn das ausgewählte Datum in freeDates ist, füge die Markierung hinzu
      dates[clickedDay] = { ...dates[clickedDay], marked: true };
    } else {
      // Wenn das ausgewählte Datum nicht in freeDates ist, markiere nur den Tag
      dates[clickedDay] = { marked: true };
    }
    return dates;
  };

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Funktion zum Öffnen des Modals mit dem ausgewählten Zeitslot
  const handleTimeSlotPress = (time) => {
    setSelectedTimeSlot(time);
    setModalVisible(true);
  };

  // Funktion zum Schließen des Modals
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Monate sind von 0-11
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleConfirmBooking = () => {
    setModalVisible(false);
    setBookingConfirmed(true);
    setTimeout(() => setBookingConfirmed(false), 3000); // Die Bestätigungsnachricht wird nach 3 Sekunden ausgeblendet
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>Wähle einen Arzt aus:</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedDoctor}
          onValueChange={(itemValue, itemIndex) => setSelectedDoctor(itemValue)}
          style={styles.picker}
        >
          {doctors.map((doctor, index) => (
            <Picker.Item
              key={index}
              label={`${doctor.name}   -   ${doctor.specialization}`}
              value={doctor.name}
            />
          ))}
        </Picker>
      </View>

      {selectedDoctor !== " -   kein Arzt ausgewählt" && (
        <View style={{ alignItems: "center" }}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={getMarkedDates()}
            style={{ width: 350, height: 360 }}
          />

          {/* Datum auswählen und Verfügbarkeit anzeigen */}
          {clickedDay && (
            <View>
              {freeDates[clickedDay] ? (
                <View>
                  <Text style={styles.dateText}>
                    Verfügbare Termine am{" "}
                    <Text style={{ fontWeight: "bold" }}>
                      {formatDate(clickedDay)}
                    </Text>
                    :
                  </Text>

                  <View style={styles.timeContainer}>
                    {[
                      "08:00",
                      "09:30",
                      "10:00",
                      "11:00",
                      "13:30",
                      "14:00",
                      "15:30",
                      "16:00",
                    ].map((time, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.timeSlot}
                        onPress={() => handleTimeSlotPress(time)}
                      >
                        <Text style={styles.timeText}>{time}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ) : (
                <Text style={styles.dateText}>
                  Leider gibt es keine freien Termine am{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {formatDate(clickedDay)}
                  </Text>
                </Text>
              )}
            </View>
          )}
        </View>
      )}
      <Modal
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Folgenden Termin buchen?</Text>
          <Text style={styles.modalText}> </Text>
          <Text style={styles.modalText}>{selectedDoctor}</Text>
          <Text style={styles.modalText}>{formatDate(clickedDay)}</Text>
          <Text style={styles.modalText}>{selectedTimeSlot}</Text>
          <Text style={styles.modalText}> </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonBook}
              title="Buchen"
              onPress={handleConfirmBooking}
            >
              <Text style={{ fontSize: 18 }}>Buchen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDelete}
              title="Zurück"
              onPress={handleCloseModal}
            >
              <Text style={{ fontSize: 18 }}>Zurück</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {bookingConfirmed && (
        <View style={styles.confirmationContainer}>
          <Text style={{ fontSize: 20 }}>Termin erfolgreich gebucht</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  messageTextContainer: {
    alignSelf: "flex-start",
    marginTop: 5,
    marginBottom: 35,
    marginRight: 55,
  },
  messageText: {
    fontSize: 32,
    fontWeight: "500",
  },
  pickerContainer: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5,
  },
  picker: {
    width: "100%",
    height: 60,
  },
  input: {
    height: 400,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    textAlignVertical: "top",
    fontSize: 20,
    marginBottom: 35,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
    height: 100,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "500",
  },
  dateText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  timeSlot: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  timeText: {
    color: "black",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(16,78,139,0.8)",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  modalText: {
    color: "white",
    fontSize: 25,
  },
  buttonBook: {
    width: 140,
    height: 70,
    backgroundColor: "#66cc00",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 2,
  },
  buttonDelete: {
    width: 140,
    height: 70,
    backgroundColor: "#ff7f24",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 2,
  },
  confirmationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "lightblue",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    borderColor: "gray",
    borderWidth: 2,
  },
});

export default NeuerTermin;
