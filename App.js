import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FIREBASE_API_KEY } from '@env';

import { SetupFirebase, GetData } from './lib/Network';

export default function App() {
  useEffect(() => {
    SetupFirebase()
    GetData();
  });
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>ddafdsa</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
