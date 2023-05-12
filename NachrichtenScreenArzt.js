import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const messages = [
  {
    sender: 'Huber Karl',
    message: 'Ihre Linsen sind fertig und können abgeholt ...',
  },
  {
    sender: 'Klein Franz',
    message: 'Guten Tag Frau Müller, es ist Zeit für Ihre ...',
  },
  {
    sender: 'Schmidt Anna',
    message: 'Ihre Blutwerte sind unauffällig, jedoch ist ...',
  },
  {
    sender: 'Li Min',
    message: 'Ich hoffe, es geht Ihnen gut. Ich wollte ...',
  },
  {
    sender: 'Gries Gudrun',
    message: 'Guten Tag, wir haben Ihre Laborergebnisse ...',
  },
  {
    sender: 'Müller Heimo',
    message: 'Ihre Blutdruckwerte sind zu hoch ...',
  },
  {
    sender: 'Los Klaus',
    message: 'Wir haben die Ergebnisse Ihrer ...',
  },
  {
    sender: 'Carlo Timo',
    message: 'Es ist Zeit für Ihre jährliche ...',
  },
  {
    sender: 'Weber Florian',
    message: 'Ich wollte nur nachfragen, ob Sie in ...',
  },
  {
    sender: 'Groß Heinz',
    message: 'Guten Tag, wir haben noch ein paar ...',
  },
  {
    sender: 'Park Jean',
    message: 'Es ist Zeit für Ihre jährliche ...',
  },
  {
    sender: 'Zieber Lisa',
    message: 'Ich habe von Ihrem Fortschritt ...',
  },
  {
    sender: 'Mann Johanna',
    message: 'Wir haben eine dringende Nachricht ...'
  },
];

const NachrichtenScreen = ({handleScreenChange}) => {
  const handleNewMessage = (screen) => {
    handleScreenChange(screen);
  };
  const handleOpenMessage = (screen) => {
    handleScreenChange(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messages}>
        {messages.map((message, index) => (
          <TouchableOpacity key={index} onPress={() => handleOpenMessage('chatArzt')} >
            <View style={styles.message} >
              <MaterialCommunityIcons name="human" size={50} color="#007AFF" />
              <View style={styles.messageText}>
                <View style={styles.info}>
                  <Text style={styles.sender}>{message.sender}</Text>
                </View>
                <Text style={styles.messagePreview}>{message.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={() => { handleNewMessage('neueNachrichtArzt') }} >
        <MaterialCommunityIcons name="plus" style={styles.fabIcon} />
        <Text style={styles.fabText}>Neue{"\n"}Nachricht</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    height: 50,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  messages: {
    flex: 1,
    padding: 5,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  info: {
    flexDirection:"row",
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageText: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  sender: {
    fontWeight: '500',
    fontSize: 22,
  },
  specialization: {
    fontStyle: 'italic',
    fontSize: 18,
    paddingLeft: 8,
  },
  messagePreview: {
    color: '#666',
    fontSize: 18,
  },
  fab: {
    position: 'absolute',
    width: 200,
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 40,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 56,
    color: 'white'
  },
  fabText: {
    marginLeft: 10,
    marginRight: 20,
    fontSize: 24,
    color: 'white',
  }
});

export default NachrichtenScreen;
