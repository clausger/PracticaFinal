import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Usuario temporal para pruebas
  const tempUser = {
    username: 'test',
    password: '123'
  };

  const handleLogin = () => {
    // Validar usuario y contraseña temporales
    if (username === tempUser.username && password === tempUser.password) {
      navigation.navigate('ListaPaises');
    } else {
      Alert.alert('Error de Inicio de Sesión', 'Nombre de usuario o contraseña inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <Text>Nombre de Usuario</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} />
        <Text>Contraseña</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Aceptar" onPress={handleLogin} />
        <Button title="Registrarme" onPress={() => Alert.alert('Funcionalidad no implementada')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loginContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
