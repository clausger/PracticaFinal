import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetallePaises({ route }) {
  const { country } = route.params;

  const handleSave = async () => {
    try {
      let savedCountries = await AsyncStorage.getItem('savedCountries');
      savedCountries = savedCountries ? JSON.parse(savedCountries) : [];
      
      // Verificar si el país ya está guardado
      if (savedCountries.some(savedCountry => savedCountry.cca3 === country.cca3)) {
        Alert.alert('Información', 'Este país ya está guardado');
        return;
      }

      // Guardar el país
      savedCountries.push(country);
      await AsyncStorage.setItem('savedCountries', JSON.stringify(savedCountries));
      Alert.alert('Éxito', 'País guardado exitosamente');
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el país');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>País: {country.name.common}</Text>
      <Text style={styles.detail}>Nombre Oficial: {country.name.official}</Text>
      <Text style={styles.detail}>Capital: {country.capital?.[0]}</Text>
      <Text style={styles.detail}>Población: {country.population}</Text>
      <Text style={styles.detail}>Región: {country.region}</Text>
      <Text style={styles.detail}>Subregión: {country.subregion}</Text>
      <Text style={styles.detail}>Área: {country.area} km²</Text>
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
});
