import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';
import { Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const CharacterDetailsScreen = (props) => {
    const post = props.navigation.getParam('post');

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            delay: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: `${post.bg}`,
            }}
        >
            <Animated.View style={{ ...styles.icon, opacity }}>
                <Entypo
                    name="cross"
                    size={40}
                    color="black"
                    onPress={() => props.navigation.goBack()}
                />
            </Animated.View>
            <View style={{ marginTop: 10 }}>
                <SharedElement id={post.id}>
                    <Image
                        source={{ uri: post.image }}
                        style={styles.harrypotter}
                    />
                </SharedElement>
            </View>
            <View style={styles.detailsCont}>
                <Animatable.View
                    animation="bounceIn"
                    delay={500}
                    style={styles.nameCont}
                >
                    <Text style={styles.name}>{post.name}</Text>
                </Animatable.View>
                <View style={styles.bioCont}>
                    <Animatable.View
                        animation="fadeInRight"
                        delay={600}
                        style={styles.headingCont}
                    >
                        <Text style={styles.heading}>⚡ House:</Text>
                        <Text style={styles.heading}>⚡ Species:</Text>
                        <Text style={styles.heading}>⚡ Ancestry:</Text>
                        <Text style={styles.heading}>⚡ Actor:</Text>
                        <Text style={styles.heading}>⚡ Date of Birth:</Text>
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInRight"
                        delay={650}
                        style={styles.valueCont}
                    >
                        <Text style={styles.value}>{post.house}</Text>
                        <Text style={styles.value}>{post.species}</Text>
                        <Text style={styles.value}>{post.ancestry}</Text>
                        <Text style={styles.value}>{post.actor}</Text>
                        <Text style={styles.value}>{post.dateOfBirth}</Text>
                    </Animatable.View>
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
    icon: {
        alignSelf: 'flex-start',
        margin: 10,
    },
    harrypotter: {
        height: 110 * 2,
        width: 130 * 2,
        resizeMode: 'contain',
    },
    detailsCont: {
        marginTop: 40,
        height: 500,
        backgroundColor: 'black',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        width: '100%',
    },
    nameCont: {
        marginTop: 20,
        alignItems: 'center',
    },
    name: {
        fontFamily: 'Parry',
        fontSize: 40,
        color: '#ffb703',
    },
    bioCont: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    value: {
        fontSize: 19.5,
        color: 'white',
    },
});

export default CharacterDetailsScreen;
