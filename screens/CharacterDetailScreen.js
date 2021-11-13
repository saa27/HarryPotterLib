import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';

const CharacterDetailsScreen = (props) => {
    const id = props.navigation.getParam('id');
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <SharedElement id={id}>
                <Image
                    source={require('../assets/images/small/harrypottersmall.png')}
                    style={styles.harrypotter}
                />
            </SharedElement>
        </View>
    );
};

CharacterDetailsScreen.sharedElements = (route) => {
    const item = route.params.id;
    return [item];
};

const styles = StyleSheet.create({
    harrypotter: {
        height: 110*2,
        width: 130*2,
    },
});

export default CharacterDetailsScreen;
