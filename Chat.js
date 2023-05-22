// Import required components from React and React Native libraries
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';

// Import Icons for buttons from Expo library
import {MaterialCommunityIcons} from '@expo/vector-icons';

// Create a functional component named Chat
const Chat = () => {
  // Initialize state for messages with a default set of messages
  const [messages, setMessages] = useState([
    {id: '1', sender: 'Doctor', message: 'Hallo, wie geht es Ihnen heute?'},
    {id: '2', sender: 'Patient', message: 'Mir geht es gut, danke!'},
    {id: '3', sender: 'Doctor', message: 'Das ist toll zu hören! Haben Sie Fragen zu Ihrer Behandlung?'},
    {id: '4', sender: 'Patient', message: 'Nein, ich habe alles verstanden. Vielen Dank!'},
    {id: '5', sender: 'Doctor', message: 'Ihre Linsen sind fertig und können abgeholt werden.'},
  ]);
  // Initialize state for the chat input text
  const [text, setText] = useState('');

  // Render the chat interface
  return (
    <View style={styles.container}>
      {/*Render a list of chat messages using FlatList*/}
      <FlatList 
        data={messages} 
        renderItem={({item}) => 
          // For each chat message, render a text bubble
          <View style={item.sender === 'Doctor' ? styles.doctorBubble : styles.patientBubble}>
            <Text style ={styles.messageFont}>{item.message}</Text>
          </View>
        }
        // Use the message id as a key for list items
        keyExtractor={item => item.id}
      />
      <View style={styles.row}>
        {/*Render a TextInput for chat message input*/}
        <TextInput 
          style={styles.input} 
          onChangeText={setText} // Update the state when the input changes
          value={text} 
          placeholder="Schreib hier deine Nachricht..." 
        />
        {/*Render a send button that adds the current chat input to the messages when pressed*/}
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

// Define styles for the chat interface
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
    marginRight: 20,
    padding: 10,
  },
  patientBubble: {
    backgroundColor: '#1e90ff',
    alignSelf: 'flex-end',
    borderRadius: 4,
    margin: 8,
    marginLeft: 20,
    padding: 10,
  },

  messageFont: {
    fontSize: 20
  }
  
});

export default Chat;
