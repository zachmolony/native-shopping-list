import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import uuid from 'uuid-random';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Two Packs' },
    { id: uuid(), text: 'Juice' }
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((i) => i.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Value cannot be blank');
    } else {
      setItems([{ id: uuid(), text }, ...items]);
    }
  };

  return (
    <View style={s.view}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const s = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 60
  },
  img: { width: 100, height: 100 }
});

export default App;
