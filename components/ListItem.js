import React from 'react';
import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={s.listItem}>
      <View style={s.listItemView}>
        <Text style={s.ListItemText}>{item.text}</Text>
        <Icon
          name="close"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ListItemText: {
    fontSize: 18
  }
});

export default ListItem;
