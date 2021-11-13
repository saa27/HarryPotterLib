import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Tile = (props) => {
    return (
        <View style={styles.cont}>
            <Text style={styles.title}>{props.name}</Text>
            <Image
                source={props.imageUrl}
                style={styles.img}
            />
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
        marginBottom: 20
    },
    img: {
        width: 130,
        height: 110,
        resizeMode: 'contain'
    },
});

export default Tile;
