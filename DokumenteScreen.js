import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


//Statische Inhalte für die Liste

const documents = [
  {
    doctor: "Dr. Huber",
    specialization: "Ophthalmologe",
    date: "11.05.2023",
    document: "Überweisung",
  },
  {
    doctor: "Dr. Lee",
    specialization: "Orthopäde",
    date: "16.04.2023",
    document: "Rezept",
  },
  {
    doctor: "Dr. Lee",
    specialization: "Orthopäde",
    date: "16.04.2023",
    document: "Krankmeldung",
  },
  {
    doctor: "Dr. Wittmann",
    specialization: "Radiologe",
    date: "09.02.2023",
    document: "Krankmeldung",
  },
  {
    doctor: "Dr. Wittmann",
    specialization: "Radiologe",
    date: "09.02.2023",
    document: "Rezept",
  },
  {
    doctor: "Dr. Koch",
    specialization: "Dermatologe",
    date: "20.11.2022",
    document: "Rezept",
  },
  {
    doctor: "Dr. Koch",
    specialization: "Dermatologe",
    date: "20.11.2022",
    document: "Überweisung",
  },
  {
    doctor: "Dr. Zieber",
    specialization: "Psychologin",
    date: "02.08.2022",
    document: "Rezept",
  },
  {
    doctor: "Dr. Roth",
    specialization: "HNO-Ärztin",
    date: "08.06.2023",
    document: "Krankmeldung",
  },
];


// Inhalt der Seite 

const DokumenteScreen = () => {
  // Zustände des Modals und des Suchtexts
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Funktion zum Öffnen des Modals

  const handleNotification = () => {
    setModalVisible(true);
  };

  // Funktion zum Schließen des Modals

  const handleModalClose = () => {
    setModalVisible(false);
  };

  // Funktion welche Daten der Dokumente auf positive Suchergebnisse überprüft
  const filteredDocuments = documents.filter(document => {
    return (
      document.doctor.toLowerCase().includes(searchText.toLowerCase()) ||
      document.specialization.includes(searchText) ||
      document.document.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  // Rendering der Elemente der Seite
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="Suche"
      />
      <ScrollView style={styles.documentsList}>

        {/* Sichbare Ausgabe der Liste */}

        {filteredDocuments.map((docData, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.documentItem}>
              <MaterialCommunityIcons name="file-document" size={50} color="#007AFF" />
              <View style={styles.documentText}>
                <View style={styles.info}>
                  <Text style={styles.documentFont}>{docData.document}</Text>
                </View>
                <View style={styles.info}>
                  <Text style={styles.doctorFont}>
                    {docData.doctor} -
                  </Text>
                  <Text style={styles.specializationFont}>
                    {' '}{docData.specialization}
                  </Text>
                </View>
                <Text style={styles.dateFont}>{docData.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Button "Dokumente aktualisieren" */}

      <TouchableOpacity style={styles.fab} onPress={handleNotification}>
        <MaterialCommunityIcons name="update" style={styles.fabIcon} />
        <Text style={styles.fabText}>Dokumente{"\n"}aktualisieren</Text>
      </TouchableOpacity>

      {/* Inhalte der Notification */}

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Kein neues Dokument erhalten</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
              <Text style={styles.modalButtonText}>Verstanden</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


// Stile für die unterschiedlichen Dokumente

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchBar: {
    height: 50,
    borderColor: '#03A9F4',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  documentsList: {
    flex: 1,
    padding: 5,
  },
  documentItem: {
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
  documentText: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  documentFont: {
    fontWeight: "500",
    fontSize: 24,
  },
  doctorFont: {
    color: "#666",
    fontSize: 20,
    fontWeight: "bold"
  },
  specializationFont: {
    color: "#666",
    fontSize: 20,
    fontStyle: "italic",
  },

  dateFont: {
    color: "#666",
    fontSize: 18,
    fontWeight: "normal"
  },
  fab: {
    position: "absolute",
    width: 250,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#03A9F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    elevation: 8,
  },
  modalButtonText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});

export default DokumenteScreen;
