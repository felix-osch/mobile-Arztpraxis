// Importing required components and libraries from react, react-native and @expo/vector-icons
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Import Icons for buttons from Expo library
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Array of messages, each message contains sender name, specialization and the message content
const messages = [
  {
    sender: "Dr. Huber",
    specialization: "Ophthalmologe",
    message: "Ihre Linsen sind fertig und können abgeholt ...",
  },
  {
    sender: "Dr. Klein",
    specialization: "Kardiologe",
    message: "Guten Tag Frau Müller, es ist Zeit für Ihre ...",
  },
  {
    sender: "Dr. Schmidt",
    specialization: "Dermatologe",
    message: "Ihre Blutwerte sind unauffällig, jedoch ist ...",
  },
  {
    sender: "Dr. Senn",
    specialization: "Psychologin",
    message: "Ich hoffe, es geht Ihnen gut. Ich wollte ...",
  },
  {
    sender: "Dr. Gries",
    specialization: "Allgemeinmediziner",
    message: "Guten Tag, wir haben Ihre Laborergebnisse ...",
  },
  {
    sender: "Dr. Müller",
    specialization: "Internist",
    message: "Ihre Blutdruckwerte sind zu hoch ...",
  },
  {
    sender: "Dr. Lee",
    specialization: "Orthopäde",
    message: "Wir haben die Ergebnisse Ihrer ...",
  },
  {
    sender: "Dr. Carlo",
    specialization: "Zahnarzt",
    message: "Es ist Zeit für Ihre jährliche ...",
  },
  {
    sender: "Dr. Weber",
    specialization: "Psychologin",
    message: "Ich wollte nur nachfragen, ob Sie in ...",
  },
  {
    sender: "Dr. Groß",
    specialization: "Allgemeinmediziner",
    message: "Guten Tag, wir haben noch ein paar ...",
  },
  {
    sender: "Dr. Park",
    specialization: "Neurologin",
    message: "Es ist Zeit für Ihre jährliche ...",
  },
  {
    sender: "Dr. Zieber",
    specialization: "Psychologin",
    message: "Ich habe von Ihrem Fortschritt ...",
  },
  {
    sender: "Dr. Mann",
    specialization: "Allgemeinmediziner",
    message: "Wir haben eine dringende Nachricht ...",
  },
];

// NachrichtenScreen is a functional component for displaying messages
// The component receives handleScreenChange function as props for navigation
const NachrichtenScreen = ({ handleScreenChange }) => {
  // Function to navigate to the new message screen
  const handleNewMessage = (screen) => {
    handleScreenChange(screen);
  };
  // Function to open an existing message
  const handleOpenMessage = (screen) => {
    handleScreenChange(screen);
  };

  // Render the NachrichtenScreen component
  return (
    <View style={styles.container}>
      {/* Display messages in a scrollable view */}
      <ScrollView style={styles.messages}>
         {/* Map through each message and render it on the screen */}
         {messages.map((message, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOpenMessage("chat")} // On press, navigate to the chat screen to display a message
          >
            <View style={styles.message}>
              <MaterialCommunityIcons name="doctor" size={50} color="#007AFF" />
              <View style={styles.messageText}>
                <View style={styles.info}>
                  <Text style={styles.sender}>{message.sender}</Text>
                  <Text style={styles.specialization}>
                    - {message.specialization}
                  </Text>
                </View>
                <Text style={styles.messagePreview}>{message.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Floating Action Button for creating new message */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          handleNewMessage("neueNachricht");
        }}
      >
        <MaterialCommunityIcons name="plus" style={styles.fabIcon} />
        <Text style={styles.fabText}>Neue{"\n"}Nachricht</Text>
      </TouchableOpacity>
    </View>
  );
};

// Stylesheet for the NachrichtenScreen component
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
  messages: {
    flex: 1,
    padding: 5,
  },
  message: {
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
  messageText: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  sender: {
    fontWeight: "500",
    fontSize: 22,
  },
  specialization: {
    fontStyle: "italic",
    fontSize: 18,
    paddingLeft: 8,
  },
  messagePreview: {
    color: "#666",
    fontSize: 18,
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
