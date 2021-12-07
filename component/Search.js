import React, {Component} from 'react';
import type {Node} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const axios = require('axios');

const ConditionCount = (props): Node => {
  if (props.count > 5) {
    return (
      <View>
        <Text>Count over 5!: {props.count}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Count: {props.count}</Text>
    </View>
  );
};

const FetchTestAPI = (): Node => {
  const [text, onFetch] = React.useState(null);

  const getInstaAPI = async () => {
    await axios({
      method: 'get',
      url: 'https://9e240d7v0k.execute-api.ap-northeast-2.amazonaws.com/api/instagram',
    }).then(function (response) {
      onFetch(response.data);
    });
  };
  React.useEffect(() => {
    getInstaAPI();
  }, []);

  return <Text>{JSON.stringify(text)}</Text>;
};

const SearchSubmit = (props): Node => {
  return (
    <Button
      title="🔍"
      style={styles.button}
      onPress={() => Alert.alert('Simple Button pressed\n' + props.text)}
    />
  );
};

const SearchTextInput = (props): Node => {
  const [text, onChangeText] = React.useState(null);
  return (
    <View>
      <View style={styles.fixToText}>
        <View style={{flex: 0.65}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={{flex: 0.3}}>
          <SearchSubmit text={text} />
        </View>
      </View>

      <ConditionCount {...props} />
    </View>
  );
};

const SelectSearch = (): Node => {
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View>
      <View>
        <SearchTextInput style={styles.countContainer} count={count} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FetchTestAPI />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  fixToText: {
    height: 65,
    margin: 12,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {SelectSearch};
