// Importing required components and libraries from react, react-native and @expo/vector-icons
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

// Import Icons for buttons from Expo library
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Array of messages, each message contains sender name and the message content
const messages = [
  {
    date: "Heute",
    sender: "Huber Karl",
    message: "Vielen Dank Herr Doktor! Ich möchte ...",
  },
  {
    date: "Gestern",
    sender: "Klein Franz",
    message: "Ist es für Sie in Ordnung, wenn ich ...",
  },
  {
    date: "Gestern",
    sender: "Schmidt Anna",
    message: "Hätten Sie denn auch nächste Woche Zeit, ...",
  },
  {
    date: "07.Juni",
    sender: "Li Min",
    message: "Ich hoffe, es geht Ihnen gut. Ich wollte ...",
  },
  {
    date: "07.Juni",
    sender: "Gries Gudrun",
    message: "Guten Tag, wir haben Ihre Laborergebnisse ...",
  },
  {
    date: "03.Juni",
    sender: "Müller Heimo",
    message: "Ihre Blutdruckwerte sind zu hoch ...",
  },
  {
    date: "03.Juni",
    sender: "Los Klaus",
    message: "Wir haben die Ergebnisse Ihrer ...",
  },
  {
    date: "01.Juni",
    sender: "Carlo Timo",
    message: "Es ist Zeit für Ihre jährliche ...",
  },
  {
    date: "01.Juni",
    sender: "Weber Florian",
    message: "Ich wollte nur nachfragen, ob Sie in ...",
  },
  {
    date: "30.April",
    sender: "Groß Heinz",
    message: "Guten Tag, wir haben noch ein paar ...",
  },
  {
    date: "28.April",
    sender: "Park Jean",
    message: "Es ist Zeit für Ihre jährliche ...",
  },
  {
    date: "37.April",
    sender: "Zieber Lisa",
    message: "Ich habe von Ihrem Fortschritt ...",
  },
  {
    date: "25.April",
    sender: "Mann Johanna",
    message: "Wir haben eine dringende Nachricht ...",
  },
];

// NachrichtenScreen is a functional component for displaying messages
// The component receives handleScreenChange function as props for navigation
const NachrichtenScreen = ({ handleScreenChange }) => {
  // State of the search text
  const [searchText, setSearchText] = useState("");

  // Function to navigate to the new message screen
  const handleNewMessage = (screen) => {
    handleScreenChange(screen);
  };
  // Function to open an existing message
  const handleOpenMessage = (screen) => {
    handleScreenChange(screen);
  };
  // Function that checks messages for positive search results
  const filteredMessages = messages.filter((message) => {
    return message.sender.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Suche"
      />
      {/* Display messages in a scrollable view */}
      <ScrollView style={styles.messages}>
        {/* Map through each message and render it on the screen */}
        {filteredMessages.map((message, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOpenMessage("chatArzt")}
          >
            <View style={styles.message}>
              <MaterialCommunityIcons name="human" size={50} color="#007AFF" />
              <View style={styles.messageText}>
                <View style={styles.row}>
                  <Text style={styles.sender}>{message.sender}</Text>
                  <View style={styles.dateContainer}>
                    <Text style={styles.date}>{message.date}</Text>
                    {(message.date === "Heute" ||
                      message.date === "Gestern") && (
                      <View style={styles.notificationBadge}>
                        <Text style={styles.notificationBadgeText}>1</Text>
                      </View>
                    )}
                  </View>
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
          handleNewMessage("neueNachrichtArzt");
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
  searchBar: {
    height: 50,
    borderColor: "#03A9F4",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 18,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationBadge: {
    backgroundColor: "#89CFF0",
    borderRadius: 13,
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  notificationBadgeText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
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
