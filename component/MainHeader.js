import type {Node} from 'react';
import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';
import React from 'react';

const MainHeader = (): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <ImageBackground
            accessibilityRole="image"
            testID="new-app-screen-header"
            source={require('./tichu.jpg')}
            imageStyle={styles.logo}>
            <Text
                style={[
                    styles.text,
                ]}>
                Test
                {'\n'}
                Custom text
            </Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: 96,
        paddingHorizontal: 32,
    },
    logo: {
        opacity: 0.5,
        overflow: 'visible',
        resizeMode: 'cover',
        /*
         * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
         *
         * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
         * source image's size.
         */
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
    },
});


export {
    MainHeader,
};
