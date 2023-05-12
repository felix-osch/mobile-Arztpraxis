import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

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

const NeueNachrichtScreen = ({handleScreenChange}) => {
  const [selectedPatient, setSelectedPatient] = useState(patients[0].name);
  const [message, setMessage] = useState('');

  const handleSendButton = (screen) => {
    handleScreenChange(screen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>Wähle einen Patienten:</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedPatient}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPatient(itemValue)
          }
          style={styles.picker}
        >
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