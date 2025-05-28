import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have Ionicons available
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    router.push('/home');
    console.log('Login attempted with:', { email, password });
  };

  return (
    <View style={styles.container}>
      {/* Placeholder for Logo */}
      <View style={styles.logoPlaceholder}></View>

      <Text style={styles.title}>Acesse sua conta</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email" // Placeholder text
          keyboardType="email-address"
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha" // Placeholder text
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.passwordToggle}>
          <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      <Text style={styles.passwordHint}>Possui 8 caracteres ou mais</Text>

      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continuar</Text>
        <Ionicons name="arrow-forward-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#eee', // Placeholder color
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  passwordToggle: {
    padding: 10,
  },
  passwordHint: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: '#6a1b9a', // Purple color
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});