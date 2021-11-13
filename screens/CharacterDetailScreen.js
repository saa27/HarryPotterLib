import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CharacterDetailsScreen = (props) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../assets/images/big/harrypotterbig.png')}
                style={styles.harrypotter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    harrypotter: {
        height: 410,
        width: 215,
    },
});

export default CharacterDetailsScreen;
