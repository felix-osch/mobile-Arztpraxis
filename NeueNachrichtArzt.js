// Importing required components and hooks from React and React Native libraries
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

// Component used to create dropdowns
import {Picker} from '@react-native-picker/picker';

// Array of patient objects. Each object contains the name of a patient.
const patients = [
    {
      name: '- kein Patient ausgewählt - ',
    },
    {
      name: 'Huber Karl',
    },
    {
      name: 'Klein Franz',
    },
    {
      name: 'Schmidt Anna',
    },
    {
      name: 'Li Min',
    },
    {
      name: 'Gries Gudrun',
    },
    {
      name: 'Müller Heimo',
    },
    {
      name: 'Los Klaus',
    },
    {
      name: 'Carlo Timo',
    },
    {
      name: 'Weber Florian',
    },
    {
      name: 'Groß Heinz',
    },
    {
      name: 'Park Jean',
    },
    {
      name: 'Zieber Lisa',
    },
    {
      name: 'Mann Johanna',
    },
  ];

// The NeueNachrichtScreen component
// It receives a handleScreenChange function as a prop.
const NeueNachrichtScreen = ({handleScreenChange}) => {
  // Setting the initial state for the selected patient and message text.
  const [selectedPatient, setSelectedPatient] = useState(patients[0].name);
  const [message, setMessage] = useState('');

  // Function to handle the click of the send button, it will call the handleScreenChange function with the given screen name.
  const handleSendButton = (screen) => {
    handleScreenChange(screen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>Wähle einen Patienten:</Text>
      </View>
      <View style={styles.pickerContainer}>
        {/*Picker component to show the list of patients for selection. The selected value is tracked in selectedPatient state.*/}
        <Picker
          selectedValue={selectedPatient}
          // Function to change the selectedPatient state whenever a new value is selected
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPatient(itemValue)
          }
          style={styles.picker}
        >
          {/* For each patient in the patients array, a Picker.Item component is created. This component represents one option in the dropdown list. */}
          {patients.map((patient, index) => (
            <Picker.Item key={index} label={patient.name} value={patient.name} />
          ))}
        </Picker>
      </View>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setMessage(text)}
        value={message} 
        placeholder="Schreibe hier deine Nachricht ..." 
      />
      <TouchableOpacity title="Senden" style={styles.button} onPress={() => {handleSendButton('nachrichtenArzt')} } >
          <Text style={styles.buttonText}>Senden</Text>
      </TouchableOpacity>
    </View>
  );
};

//StyleSheet for NeueNachricht
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  messageTextContainer: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 35,
    marginRight: 55,
  },
  messageText: {
      fontSize: 30,
      fontWeight: '500',
  },
  pickerContainer: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 35,
  },
  picker: {
    width: '100%',
    height: 60,
  },
  input: {
    height: 400,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 20,
    marginBottom: 35,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500',
  },
});

export default NeueNachrichtScreen;