import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const LibraryScreen = () => {
    return (
        <View style={styles.topContainer}>
            <Image
                source={require('../assets/images/hplogo.png')}
                style={styles.hplogo}
            />
            <View style={styles.container}>
                <Pressable>
                    <Image
                        source={require('../assets/images/small/harrypottersmall.png')}
                        style={styles.harrypotter}
                    />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        paddingTop: 5,
    },
    container: {
        margin: 20,
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
