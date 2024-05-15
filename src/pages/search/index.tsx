import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Homepage!</Text>
      <Text style={styles.subtitle}>Page de Busca</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
});


