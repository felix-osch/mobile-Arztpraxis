import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Divider } from "react-native-paper";

//Component that displays more details about a given appointment from the patients point of view
const TerminUebersicht = () => {
  const [details, setDetails] = useState([
    {
      doctor: "Dr. Huber",
      specialization: "Ophthalmologe",
      date: "Donnerstag, 01.06.2023",
      time: "08:00",
      address: "Arztgasse 13/3",
      telefone: "0664/12 34 567",
      notes: "Netzhautuntersuchung",
    },
  ]);

  return (
    <View style={styles.container}>
      {details.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>{item.doctor}</Text>
            <Text style={styles.subtitle}>{item.specialization}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.text}>
              Termin: {item.date}, {item.time}
            </Text>
            <Text style={styles.text}>Adresse: {item.address}</Text>
            <Text style={styles.text}>Telefon: {item.telefone}</Text>
            <Text style={styles.text}>Notizen: {item.notes}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

// Stylesheet for the TerminUebersicht component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  card: {
    marginVertical: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default TerminUebersicht;
