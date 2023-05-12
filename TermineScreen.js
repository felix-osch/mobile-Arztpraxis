import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TermineScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Das sind deine Termine.</Text>
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
  text: {
    fontSize: 24,
  },
});

export default TermineScreen;
