import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const doctors = [
  {
    name: ' -   kein Arzt ausgewählt',
    specialization : '',
  },
  {
    name: 'Dr. Huber',
    specialization: 'Ophthalmologe',
  },
  {
    name: 'Dr. Klein',
    specialization: 'Kardiologe',
  },
  {
    name: 'Dr. Schmidt',
    specialization: 'Dermatologe',
  },
  {
    name: 'Dr. Senn',
    specialization: 'Psychologin',
  },
  {
    name: 'Dr. Gries',
    specialization: 'Allgemeinmediziner',
  },
  {
    name: 'Dr. Müller',
    specialization: 'Internist',
  },
  {
    name: 'Dr. Lee',
    specialization: 'Orthopäde',
  },
  {
    name: 'Dr. Carlo',
    specialization: 'Zahnarzt',
  },
  {
    name: 'Dr. Weber',
    specialization: 'Psychologin',
  },
  {
    name: 'Dr. Groß',
    specialization: 'Allgemeinmediziner',
  },
  {
    name: 'Dr. Park',
    specialization: 'Neurologin',
  },
  {
    name: 'Dr. Zieber',
    specialization: 'Psychologin',
  },
  {
    name: 'Dr. Mann',
    specialization: 'Allgemeinmediziner',
  },
  {
    name: 'Dr. Sonne',
    specialization: 'Psychologe',
  },
  {
    name: 'Dr. Gaus',
    specialization: 'Allgemeinmedizinerin',
  },
  {
    name: 'Dr. House',
    specialization: 'Neurologe',
  },
  {
    name: 'Dr. Ziller',
    specialization: 'Kardiologe',
  },
  {
    name: 'Dr. Frau',
    specialization: 'Allgemeinmedizinerin',
  },
];

const NeueNachrichtScreen = ({handleScreenChange}) => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].name);
  const [message, setMessage] = useState('');

  const handleSendButton = (screen) => {
    handleScreenChange(screen);
  };
  return (
    <View style={styles.container}>
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>Wähle einen Arzt aus:</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedDoctor}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDoctor(itemValue)
          }
          style={styles.picker}
        >
          {doctors.map((doctor, index) => (
            <Picker.Item key={index} label={`${doctor.name}   -   ${doctor.specialization}`} value={doctor.name} />
          ))}
        </Picker>
      </View>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setMessage(text)}
        value={message} 
        placeholder="Schreibe hier deine Nachricht ..." 
      />
      <TouchableOpacity title="Senden" style={styles.button} onPress={() => {handleSendButton('nachrichten')} } >
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
      fontSize: 32,
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