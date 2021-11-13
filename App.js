import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LibraryScreen from './screens/LibraryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LibraryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
