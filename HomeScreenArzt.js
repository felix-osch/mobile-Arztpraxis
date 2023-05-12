import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreenArzt = ({handleScreenChange}) => {
  const handleScreenPress = (screen) => {
    handleScreenChange(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          /* onPress={() => handleScreenPress('meinbereich')} */>
          <MaterialCommunityIcons name="account" size={80} color="white" />
          <Text style={styles.buttonText}>Mein Bereich</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          /* onPress={() => handleScreenPress('bedienungshilfe')} */>
          <MaterialCommunityIcons name="help-circle" size={80} color="white" />
          <Text style={styles.buttonText}>Bedienungshilfe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleScreenPress('termineArzt')}>
          <MaterialCommunityIcons name="calendar-clock" size={80} color="white" />
          <Text style={styles.buttonText}>Termine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleScreenPress('dokumenteArzt')}>
          <MaterialCommunityIcons name="file-document" size={80} color="white" />
          <Text style={styles.buttonText}>Dokumente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          /* onPress={() => handleScreenPress('patienten')} */>
          <MaterialCommunityIcons name="human" size={80} color="white" />
          <Text style={styles.buttonText}>Patienten</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleScreenPress('nachrichtenArzt')}>
          <MaterialCommunityIcons name="message" size={80} color="white" />
          <Text style={styles.buttonText}>Nachrichten</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    flex: 1,
    margin: 8,
    paddingVertical: 55,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default HomeScreenArzt;
