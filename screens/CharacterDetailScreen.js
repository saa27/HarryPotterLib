import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';
import { CHARACTERS } from '../data';

const CharacterDetailsScreen = (props) => {
    const post = props.navigation.getParam('post');

    // const character = CHARACTERS.find((character) => character.id === id);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: `${post.bg}`,
            }}
        >
            <View style={{ marginTop: 30 }}>
                <SharedElement id={post.id}>
                    <Image
                        source={{ uri: post.image }}
                        style={styles.harrypotter}
                    />
                </SharedElement>
            </View>
            <View style={styles.detailsCont}>
                <Text style={styles.name}>{post.name}</Text>
            </View>
            {/* <Text>{character.name}</Text> */}
        </View>
    );
};

CharacterDetailsScreen.sharedElements = (route) => {
    const item = route.params.post.id;
    return [item];
};

const styles = StyleSheet.create({
    harrypotter: {
        height: 110 * 2,
        width: 130 * 2,
        resizeMode: 'contain',
    },
    detailsCont: {
        marginTop: 40,
        height: 500,
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontFamily: 'Parry',
        fontSize: 40
    },
});

export default CharacterDetailsScreen;
