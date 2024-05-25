import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const DashboardScreen = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const userEmail = 'Bruno'; // Definindo o nome do usuário como "Bruno"

  // Função para adicionar um novo post
  const addPost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, { email: userEmail, content: newPost }]);
      setNewPost('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <TextInput
        style={styles.input}
        value={newPost}
        onChangeText={setNewPost}
        placeholder="Digite seu post"
      />
      <Button title="Postar" onPress={addPost} />
      <ScrollView style={styles.postContainer}>
        {posts.map((post, index) => (
          <View key={index} style={styles.post}>
            <Text style={styles.postEmail}>{post.email}</Text>
            <Text>{post.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  postContainer: {
    width: '100%',
  },
  post: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  postEmail: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default DashboardScreen;