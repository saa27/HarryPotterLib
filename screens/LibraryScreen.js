import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableNativeFeedback,
    FlatList,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';
import Tile from '../components/Tile';

import { CHARACTERS } from '../data';

const { height, width } = Dimensions.get('window');

const LibraryScreen = (props) => {
    const renderCharacterItem = ({ item, index }) => {
        return (
            <Tile
                id={item.id}
                name={item.name}
                imageUrl={item.image}
                bg={item.bg}
                onSelect={() => {
                    props.navigation.push('Detail', {
                        post: item,
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.topContainer}>
            <Image
                source={require('../assets/images/hplogo.png')}
                style={styles.hplogo}
            />
            <View style={styles.container}>
                <FlatList
                    data={CHARACTERS}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={renderCharacterItem}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: 'black',
    },
    container: {
        marginVertical: 30,
        marginHorizontal: 10,
        marginBottom: 150,
    },
    hplogo: {
        width: width,
        height: height / 6,
        resizeMode: 'cover',
    },
    harrypotter: {
        width: 110,
        height: 90,
    },
});

export default LibraryScreen;
