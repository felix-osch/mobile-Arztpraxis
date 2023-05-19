import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import TermineScreen from "./TermineScreen";
import TerminUebersicht from "./TerminUebersicht";
import NeuerTermin from "./NeuerTermin";
import DokumenteScreen from "./DokumenteScreen";
import NachrichtenScreen from "./NachrichtenScreen";
import NeueNachricht from "./NeueNachricht";
import Chat from "./Chat";
import HomeScreenArzt from "./HomeScreenArzt";
import TermineScreenArzt from "./TermineScreenArzt";
import TerminUebersichtArzt from "./TerminUebersichtArzt";
import DokumenteScreenArzt from "./DokumenteScreenArzt";
import NachrichtenScreenArzt from "./NachrichtenScreenArzt";
import ChatArzt from "./ChatArzt";
import NeueNachrichtArzt from "./NeueNachrichtArzt";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [screen, setScreen] = useState("login");

  const handleLogin = (userType) => {
    setLoggedIn(true);
    setUserType(userType);
    if (userType === "patient") {
      setScreen("home");
    }
    if (userType === "doctor") {
      setScreen("homeArzt");
    }
  };

  const handleLeftButton = () => {
    switch (screen) {
      case "home":
        setLoggedIn(false);
        setUserType(null);
        setScreen("login");
        break;
      case "homeArzt":
        setLoggedIn(false);
        setUserType(null);
        setScreen("login");
        break;
      case "nachrichten":
        setScreen("home");
        break;
      case "dokumente":
        setScreen("home");
        break;
      case "termine":
        setScreen("home");
        break;
      case "nachrichtenArzt":
        setScreen("homeArzt");
        break;
      case "dokumenteArzt":
        setScreen("homeArzt");
        break;
      case "termineArzt":
        setScreen("homeArzt");
        break;
      case "terminUebersichtArzt":
        setScreen("termineArzt");
        break;
      case "neueNachricht":
        setScreen("nachrichten");
        break;
      case "neueNachrichtArzt":
        setScreen("nachrichtenArzt");
        break;
      case "terminUebersicht":
        setScreen("termine");
        break;
      case "neuerTermin":
        setScreen("termine");
        break;
      case "chat":
        setScreen("nachrichten");
        break;
      case "chatArzt":
        setScreen("nachrichtenArzt");
        break;
    }
  };

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  const renderScreen = () => {
    switch (screen) {
      case "home":
        return <HomeScreen handleScreenChange={handleScreenChange} />;
      case "homeArzt":
        return <HomeScreenArzt handleScreenChange={handleScreenChange} />;
      case "termine":
        return <TermineScreen handleScreenChange={handleScreenChange} />;
      case "dokumente":
        return <DokumenteScreen />;
      case "nachrichten":
        return <NachrichtenScreen handleScreenChange={handleScreenChange} />;
      case "neueNachricht":
        return <NeueNachricht handleScreenChange={handleScreenChange} />;
      case "chat":
        return <Chat handleScreenChange={handleScreenChange} />;
      case "neuerTermin":
        return <NeuerTermin handleScreenChange={handleScreenChange} />;
      case "terminUebersicht":
        return <TerminUebersicht handleScreenChange={handleScreenChange} />;
      case "termineArzt":
        return <TermineScreenArzt handleScreenChange={handleScreenChange} />;
      case "terminUebersichtArzt":
        return <TerminUebersichtArzt handleScreenChange={handleScreenChange} />;
      case "dokumenteArzt":
        return <DokumenteScreenArzt />;
      case "nachrichtenArzt":
        return (
          <NachrichtenScreenArzt handleScreenChange={handleScreenChange} />
        );
      case "neueNachrichtArzt":
        return <NeueNachrichtArzt handleScreenChange={handleScreenChange} />;
      case "chatArzt":
        return <ChatArzt handleScreenChange={handleScreenChange} />;
      default:
        return <HomeScreen handleScreenChange={handleScreenChange} />;
    }
  };

  const renderTitle = () => {
    switch (screen) {
      case "home":
        return "Home";
      case "termine":
        return "Termine";
      case "dokumente":
        return "Dokumente";
      case "nachrichten":
        return "Nachrichten";
      case "neueNachricht":
        return "Neue Nachricht";
      case "chat":
        return "Unterhaltung";
      case "neuerTermin":
        return "Neuer Termin";
      case "terminUebersicht":
        return "Termin Übersicht";
      case "homeArzt":
        return "Home";
      case "termineArzt":
        return "Termine";
      case "terminUebersichtArzt":
        return "Termin Übersicht";
      case "dokumenteArzt":
        return "Dokumente";
      case "nachrichtenArzt":
        return "Nachrichten";
      case "chatArzt":
        return "Unterhaltung";
      case "neueNachrichtArzt":
        return "Neue Nachricht";
      case "login":
        return "Mobile Arztpraxis";
      default:
        return "Mein Bereich";
    }
  };

  const renderLeftButton = () => {
    if (screen === "home" || screen === "homeArzt") {
      return (
        <TouchableOpacity onPress={handleLeftButton}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={handleLeftButton}>
          <Ionicons name="arrow-back" size={36} color="white" />
        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#007AFF" barStyle="light-content" />
      {!loggedIn ? (
        <>
          <View style={styles.headerLogin}>
            <Text style={styles.title}>{renderTitle()}</Text>
          </View>
          <LoginScreen handleLogin={handleLogin} />
        </>
      ) : (
        <>
          <View style={styles.header}>
            {renderLeftButton()}
            <Text style={styles.title}>{renderTitle()}</Text>
          </View>
          {renderScreen()}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headerLogin: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "relative",
  },
  title: {
    fontSize: 28,
    color: "#fff",
  },
  logout: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
