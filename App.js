import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HarryPotterNavigator from './navigation/HarryPotterNavigator';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <HarryPotterNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
