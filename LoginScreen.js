// React and hooks imports
import React, { useState } from 'react';

// React Native imports
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// LoginScreen Component
const LoginScreen = ({ handleLogin }) => {
    // State hooks for user number, password, and user type
    const [userNumber, setUserNumber] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState(null);

    // Function to set the userType state
    const handleUserTypeSelect = (selectedType) => {
        setUserType(selectedType);
    };

    // Handle function for the login button
    // If user credentials are correct, calls the handleLogin function with userType
    // Using hard coded credentials for simplicity of PT
    const handleLoginPress = () => {
        if (userNumber === '1234' && password === 'password' && userType !== null) {
        handleLogin(userType);
        } else {
        alert('Ihre Anmeldeinformationen sind leider nicht korrekt. Bitte versuchen Sie es erneut.');
        }
    };

    // Helper function to get the placeholder for the user number input based on user type
    const getUserNumberPlaceholder = () => {
        if (userType === 'patient') {
        return 'Sozialversicherungsnummer';
        } else if (userType === 'doctor') {
        return 'ÖÄK-Nummer';
        } else {
        return 'Login Daten';
        }
    };

    // Render function for the LoginScreen component
    return (
        <View style={styles.container}>
        <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.inputContainer} >
            <View style={styles.userTypeContainer}>
                <TouchableOpacity
                style={[
                    styles.userTypeButton,
                    userType === 'patient' && styles.activeUserTypeButton,
                ]}
                onPress={() => handleUserTypeSelect('patient')}>
                <Text style={[
                    styles.userTypeButtonText,
                    userType === 'patient' && styles.activeUserTypeButtonText,
                ]}>Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[ styles.userTypeButton, userType === 'doctor' && styles.activeUserTypeButton, ]}
                onPress={() => handleUserTypeSelect('doctor')}>
                <Text style={[
                    styles.userTypeButtonText,
                    userType === 'doctor' && styles.activeUserTypeButtonText,
                ]}>Doktor</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                style={styles.input}
                placeholder={getUserNumberPlaceholder()}
                value={userNumber}
                onChangeText={(text) => setUserNumber(text)}
                />
                <TextInput
                style={styles.input}
                placeholder="Passwort"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
};

// Styles for the LoginScreen component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loginTextContainer: {
        marginBottom: 20,
    },
    loginText: {
        fontSize: 36,
        fontWeight: '500',
        textAlign: 'center',
    },
    inputContainer: {
        alignItems: 'center',
        width: '80%',
    },
    userTypeContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        width: '100%',
    },
    userTypeButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeUserTypeButton: {
        backgroundColor: '#007AFF',
    },
    userTypeButtonText: {
        color: '#007AFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 36,
    },
    activeUserTypeButtonText: {
        color: 'white',
    },
    formContainer: {
        alignContent: 'center',
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        height: 70,
        fontSize: 24,
    },
    loginButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: 70,
        justifyContent: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '500',
    },
});

export default LoginScreen;
