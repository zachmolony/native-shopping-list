import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={s.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={s.btn}
        onPress={() => {
          addItem(text);
        }}>
        <Text style={s.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5
  },
  btn: {
    backgroundColor: 'lightgrey',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default AddItem;
