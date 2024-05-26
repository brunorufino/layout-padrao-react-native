// screens/ChatListScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const conversations = [
  { id: '1', name: 'Alice', lastMessage: 'Oi, tudo bem?', timestamp: '14:32' },
  { id: '2', name: 'Bob', lastMessage: 'Encontro amanhã?', timestamp: '13:15' },
  { id: '3', name: 'Charlie', lastMessage: 'Boa noite!', timestamp: '22:45' },
  { id: '4', name: 'Diana', lastMessage: 'Vamos almoçar?', timestamp: '12:00' },
];

const ChatListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Chat', { name: item.name })}>
      <View style={styles.itemHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timestamp: {
    color: '#999',
    fontSize: 12,
  },
  lastMessage: {
    color: '#666',
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
});

export default ChatListScreen;