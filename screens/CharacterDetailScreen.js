import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';
import { CHARACTERS } from '../data';

const CharacterDetailsScreen = (props) => {
    const post = props.navigation.getParam('post');

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
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
                <View style={styles.nameCont}>
                    <Text style={styles.name}>{post.name}</Text>
                </View>
                <View style={styles.bioCont}>
                    <View style={styles.headingCont}>
                        <Text style={styles.heading}>⚡ House:</Text>
                        <Text style={styles.heading}>⚡ Species:</Text>
                        <Text style={styles.heading}>⚡ Ancestry:</Text>
                        <Text style={styles.heading}>⚡ Actor:</Text>
                        <Text style={styles.heading}>⚡ Date of Birth:</Text>
                    </View>
                    <View style={styles.valueCont}>
                        <Text style={styles.value}>{post.house}</Text>
                        <Text style={styles.value}>{post.species}</Text>
                        <Text style={styles.value}>{post.ancestry}</Text>
                        <Text style={styles.value}>{post.actor}</Text>
                        <Text style={styles.value}>{post.dateOfBirth}</Text>
                    </View>
                </View>
            </View>
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
    },
    nameCont: {
        marginTop: 20,
        alignItems: 'center',
    },
    name: {
        fontFamily: 'Parry',
        fontSize: 40,
    },
    bioCont: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20
    },
    value: {
        fontSize: 20
    }
});

export default CharacterDetailsScreen;
