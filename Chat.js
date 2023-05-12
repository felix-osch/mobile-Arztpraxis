import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Chat = () => {
  const [messages, setMessages] = useState([
    {id: '1', sender: 'Doctor', message: 'Hallo, wie geht es Ihnen heute?'},
    {id: '2', sender: 'Patient', message: 'Mir geht es gut, danke!'},
    {id: '3', sender: 'Doctor', message: 'Das ist toll zu hören! Haben Sie Fragen zu Ihrer Behandlung?'},
    {id: '4', sender: 'Patient', message: 'Nein, ich habe alles verstanden. Vielen Dank!'},
    {id: '5', sender: 'Doctor', message: 'Ihre Linsen sind fertig und können abgeholt werden.'},
  ]);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <FlatList 
        data={messages} 
        renderItem={({item}) => 
          <View style={item.sender === 'Doctor' ? styles.doctorBubble : styles.patientBubble}>
            <Text>{item.message}</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
      <View style={styles.row}>
        <TextInput 
          style={styles.input} 
          onChangeText={setText} 
          value={text} 
          placeholder="Schreib hier deine Nachricht..." 
        />
        <TouchableOpacity onPress={() => {
          setMessages([...messages, {id: String(messages.length + 1), sender: 'Patient', message: text}]);
          setText('');
        }}>
          <MaterialCommunityIcons name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginRight: 16,
  },
  doctorBubble: {
    backgroundColor: '#d0d0d0',
    alignSelf: 'flex-start',
    borderRadius: 4,
    margin: 8,
    padding: 10,
  },
  patientBubble: {
    backgroundColor: '#1e90ff',
    alignSelf: 'flex-end',
    borderRadius: 4,
    margin: 8,
    padding: 10,
  },
});

export default Chat;