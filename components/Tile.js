import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';

const Tile = (props) => {
    return (
        <View style={{...styles.cont, backgroundColor: props.bg}}>
            <Text style={styles.title}>{props.name}</Text>
            <Pressable onPress={props.onSelect}>
                <SharedElement id={props.id}>
                    <Image source={{uri: props.imageUrl}} style={styles.img} />
                </SharedElement>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: '600',
    },
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        paddingHorizontal: 25,
        backgroundColor: '#0a9396',
        marginBottom: 20,
    },
    img: {
        width: 130,
        height: 110,
        resizeMode: 'contain',
    },
});

export default Tile;
