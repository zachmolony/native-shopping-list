import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = ({ title }) => {
  return (
    <View style={s.container}>
      <Text style={s.text}>{title}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: 60,
    padding: 15,
    backgroundColor: 'black'
  },
  text: { fontSize: 23, color: 'white', textAlign: 'center' },
  img: { width: 100, height: 100 }
});

export default App;
