import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';


//Statische Inhalte für die Liste

const documents = [


  {
    patient: "Huber Karl",
    date: "11.05.2023",
    document: "Überweisung",
  },
  {
    patient: "Klein Franz",
    date: "11.05.2023",
    document: "Rezept",
  },
  {
    patient: "Schmidt Anna",
    date: "11.05.2023",
    document: "Krankmeldung",
  },
  {
    patient: "Li Min",
    date: "10.05.2023",
    document: "Krankmeldung",
  },
  {
    patient: "Gries Gudrun",
    date: "10.05.2023",
    document: "Rezept",
  },
  {
    patient: "Müller Heimo",
    date: "10.05.2023",
    document: "Rezept",
  },
  {
    patient: "Los Klaus",
    date: "10.05.2023",
    document: "Überweisung",
  },
  {
    patient: "Carlo Timo",
    date: "10.05.2023",
    document: "Rezept",
  },
  {
    patient: "Weber Florian",
    date: "09.05.2023",
    document: "Rezept",
  },
  {
    patient: "Groß Heinz",
    date: "09.05.2023",
    document: "Überweisung",
  },
  {
    patient: "Park Jean",
    date: "09.05.2023",
    document: "Krankmeldung",
  },
  {
    patient: "Zieber Lisa",
    date: "09.05.2023",
    document: "Krankmeldung",
  },
  {
    patient: "Mann Johanna",
    date: "09.05.2023",
    document: "Krankmeldung",
  },

];



const DokumenteScreenArzt = () => {

  // Zustände für die Modalsichtbarkeit, den ausgewählten Patienten und das ausgewählte Dokument sowie den Suchtext
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState("-kein Patient ausgewählt-");
  const [selectedDocument, setSelectedDocument] = useState("-kein Rezept ausgewählt-");
  const [searchText, setSearchText] = useState('');

  // Funktion zum Öffnen des Modals
  const handleModalOpen = () => {
    setModalVisible(true);
  };

  // Funktion zum Schließen des Modals
  const handleModalClose = () => {
    setModalVisible(false);
  };

  // Funktion für den Senden-Button (hier noch ohne Funktionalität)
  const handleSendButton = () => {
    handleModalClose();
  };

  // Funktion für den Zurück-Button
  const handleBackButton = () => {
    handleModalClose();
  };

  // Funktion welche Daten der Dokumente auf positive Suchergebnisse überprüft
  const filteredDocuments = documents.filter(document => {
    return (
      document.patient.toLowerCase().includes(searchText.toLowerCase()) ||
      document.date.includes(searchText) ||
      document.document.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="Suche"
      />
      <ScrollView style={styles.documentsList}>

        {/* Sichtbare Ausgabe der Liste */}

        {filteredDocuments.map((document, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.documentItem}>
              <MaterialCommunityIcons name="file-document" size={50} color="#007AFF" />
              <View style={styles.documentText}>
                <View style={styles.info}>
                  <Text style={styles.documentFont}>{document.document}</Text>
                </View>
                <Text style={styles.nameFont}>{document.patient}</Text>
                <Text style={styles.dateFont}>{document.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Button zum Hochladen des Dokuments */}

      <TouchableOpacity style={styles.fab} onPress={handleModalOpen}>
        <MaterialCommunityIcons name="upload" style={styles.whiteIcon} />
        <Text style={styles.fabText}>Dokument{"\n"}hochladen</Text>
      </TouchableOpacity>

      {/* Modales Popup */}

      <Modal visible={modalVisible} animationType="none" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            {/* Picker für Patienten */}

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedPatient}
                onValueChange={(itemValue) => setSelectedPatient(itemValue)}
                style={styles.picker}

              >
                {/* Optionen für Patienten */}

                <Picker.Item label="-kein Patient ausgewählt-" value="-kein Patient ausgewählt-" />
                <Picker.Item label="Huber Karl" value="Huber Karl" />
                <Picker.Item label="Klein Franz" value="Klein Franz" />
                <Picker.Item label="Schmidt Anna" value="Schmidt Anna" />
                <Picker.Item label="Li Min" value="Li Min" />
                <Picker.Item label="Gries Gudrun" value="Gries Gudrun" />
                <Picker.Item label="Müller Heimo" value="Müller Heimo" />
                <Picker.Item label="Los Klaus" value="Los Klaus" />
                <Picker.Item label="Carlo Timo" value="Carlo Timo" />
                <Picker.Item label="Weber Florian" value="Weber Florian" />
                <Picker.Item label="Groß Heinz" value="Groß Heinz" />
                <Picker.Item label="Park Jean" value="Park Jean" />
                <Picker.Item label="Zieber Lisa" value="Zieber Lisa" />
                <Picker.Item label="Mann Johanna" value="Mann Johanna" />


              </Picker>
            </View>

            {/* Picker für Dokumente */}

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedDocument}
                onValueChange={(itemValue) => setSelectedDocument(itemValue)}
                style={styles.picker}
              >
                {/* Optionen für Dokumente */}

                <Picker.Item label="-kein Dokumenttyp ausgewählt-" value="-kein Dokumenttyp ausgewählt-" />
                <Picker.Item label="Rezept" value="Rezept" />
                <Picker.Item label="Überweisung" value="Überweisung" />
                <Picker.Item label="Krankmeldung" value="Krankmeldung" />

              </Picker>
            </View>


            {/* Feld für Upload */}

            <View style={styles.uploadField}>
              <Text style={styles.uploadText}>Datei hochladen</Text>
              <MaterialCommunityIcons name="upload" style={styles.grayIcon} />
            </View>

            {/* Button-Container */}

            <View style={styles.buttonContainer}>

              {/* Abbrechen-Button */}

              <TouchableOpacity style={[styles.modalButton, styles.backButton]} onPress={handleSendButton}>
                <Text style={styles.modalButtonText}>Abbrechen</Text>
              </TouchableOpacity>

              {/* Senden-Button */}

              <TouchableOpacity style={[styles.modalButton, styles.sendButton]} onPress={handleBackButton}>
                <Text style={styles.modalButtonText}>Senden</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


// Stile für die unterschiedlichen Komponenten

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
    fontSize: 22,
  },
  nameFont: {
    color: "#666",
    fontSize: 18,
    fontWeight: "bold",
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
  whiteIcon: {
    fontSize: 56,
    color: "white",
  },

  grayIcon: {
    fontSize: 56,
    color: "gray"  
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
    width: "100%",
    height: "60%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
  },
  picker: {
    width: "100%",
    height: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    height: 78,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    elevation: 8,
  },
  sendButton: {
    backgroundColor: "#03A9F4",
    marginRight: 5,
    marginLeft: 5
  },
  backButton: {
    backgroundColor: "orange",
    marginLeft: 5,
    marginRight: 5
  },
  modalButtonText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },

  uploadField: {
    height: 200,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  uploadText: {
    fontSize: 20,
    fontWeight: "normal",
    color: "gray"
  },
});

export default DokumenteScreenArzt;
