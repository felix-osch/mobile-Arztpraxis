import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const appointments = [
  {
    doctor: "Dr. Huber",
    specialization: "Ophthalmologe",
    date: "Donnerstag, 01.06.2023 - 08:00",
  },
  {
    doctor: "Dr. Klein",
    specialization: "Kardiologe",
    date: "Freitag, 02.06.2023 - 10:00",
  },
  {
    doctor: "Dr. Schmidt",
    specialization: "Dermatologe",
    date: "Mittwoch, 07.06.2023 - 09:30",
  },
  {
    doctor: "Dr. Senn",
    specialization: "Psychologin",
    date: "Donnerstag, 08.06.2023 - 08:00",
  },
  {
    doctor: "Dr. Gries",
    specialization: "Allgemeinmediziner",
    date: "Montag, 12.06.2023 - 11:00",
  },
  {
    doctor: "Dr. Müller",
    specialization: "Internist",
    date: "Freitag, 07.07.2023 - 13:30",
  },
  {
    doctor: "Dr. Lee",
    specialization: "Orthopäde",
    date: "Dienstag, 01.08.2023 - 08:00",
  },
  {
    doctor: "Dr. Carlo",
    specialization: "Zahnarzt",
    date: "Donnerstag, 10.08.2023 - 14:00",
  },
  {
    doctor: "Dr. Weber",
    specialization: "Psychologin",
    date: "Montag, 21.08.2023 - 16:00",
  },
  {
    doctor: "Dr. Groß",
    specialization: "Allgemeinmediziner",
    date: "Freitag, 01.09.2023 - 08:30",
  },
  {
    doctor: "Dr. Park",
    specialization: "Neurologin",
    date: "Mittwoch, 13.09.2023 - 11:15",
  },
  {
    doctor: "Dr. Zieber",
    specialization: "Psychologin",
    date: "Mittwoch, 13.09.2023 - 13:00",
  },
  {
    doctor: "Dr. Mann",
    specialization: "Allgemeinmediziner",
    date: "Freitag, 03.11.2023 - 09:00",
  },
];

const NachrichtenScreen = ({ handleScreenChange }) => {
  const handleNewAppointment = (screen) => {
    handleScreenChange(screen);
  };
  const handleOpenAppointment = (screen) => {
    handleScreenChange(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.appointments}>
        {appointments.map((appointment, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOpenAppointment("terminUebersicht")}
          >
            <View style={styles.appointment}>
              <MaterialCommunityIcons name="doctor" size={50} color="#007AFF" />
              <View style={styles.appointmentText}>
                <View style={styles.info}>
                  <Text style={styles.doctor}>{appointment.doctor}</Text>
                  <Text style={styles.specialization}>
                    - {appointment.specialization}
                  </Text>
                </View>
                <Text style={styles.appointmentPreview}>
                  {appointment.date}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          handleNewAppointment("neuerTermin");
        }}
      >
        <MaterialCommunityIcons name="plus" style={styles.fabIcon} />
        <Text style={styles.fabText}>Neuer{"\n"}Termin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    height: 50,
    backgroundColor: "#007aff",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
  },
  appointments: {
    flex: 1,
    padding: 5,
  },
  appointment: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  appointmentText: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  doctor: {
    fontWeight: "500",
    fontSize: 24,
  },
  specialization: {
    fontStyle: "italic",
    fontSize: 22,
    paddingLeft: 8,
  },
  appointmentPreview: {
    color: "#666",
    fontSize: 18,
    fontWeight: "bold"
  },
  fab: {
    position: "absolute",
    width: 200,
    height: 78,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 40,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 56,
    color: "white",
  },
  fabText: {
    marginLeft: 10,
    marginRight: 20,
    fontSize: 24,
    color: "white",
  },
});

export default NachrichtenScreen;
