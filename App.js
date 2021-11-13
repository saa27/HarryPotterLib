import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import HarryPotterNavigator from './navigation/HarryPotterNavigator';

const fetchFonts = () => {
    return Font.loadAsync({
        Parry: require('./assets/fonts/parry-hotter.regular.ttf'),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
                onError={console.warn}
            />
        );
    }
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
        backgroundColor: 'black',
    },
});
