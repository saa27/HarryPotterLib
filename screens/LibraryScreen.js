import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableNativeFeedback,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element/build/v4';

const { height, width } = Dimensions.get('window');

const LibraryScreen = (props) => {
    return (
        <View style={styles.topContainer}>
            <Image
                source={require('../assets/images/hplogo.png')}
                style={styles.hplogo}
            />
            <View style={styles.container}>
                <TouchableNativeFeedback
                    onPress={() => {
                        props.navigation.push('Detail', {
                            id: '1',
                        });
                    }}
                >
                    <SharedElement id={'1'}>
                        <Image
                            source={require('../assets/images/small/harrypottersmall.png')}
                            style={styles.harrypotter}
                        />
                    </SharedElement>
                </TouchableNativeFeedback>
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
