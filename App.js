import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TESTING_VAR } from '@env';

import { SetupFirebase } from './lib/Network';

export default function App() {
  useEffect(() => {
    SetupFirebase()
  });
  
  return (
    <View style={styles.container}>
      <Text>{TESTING_VAR}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
