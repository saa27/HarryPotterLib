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
import Tile from '../components/Tile';

const { height, width } = Dimensions.get('window');

const LibraryScreen = (props) => {
    return (
        <View style={styles.topContainer}>
            <Image
                source={require('../assets/images/hplogo.png')}
                style={styles.hplogo}
            />
            <View style={styles.container}>
                {/* <TouchableNativeFeedback
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
                </TouchableNativeFeedback> */}
                <Tile />
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
