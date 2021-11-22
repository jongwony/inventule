import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';


const SearchTextInput = (): Node => {
    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export {
   SearchTextInput
};