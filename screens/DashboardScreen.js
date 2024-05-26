import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const userEmail = 'Bruno'; // Definindo o nome do usuário como "Bruno"
  const conversingWithName = 'Joana'; // Nome da pessoa com quem está conversando
  const scrollViewRef = useRef();

  // Função para adicionar um novo post
  const addPost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, { email: userEmail, content: newPost }]);
      setNewPost('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.navBar}>
        <Text style={styles.conversingWithName}>{conversingWithName}</Text>
        <TouchableOpacity
          style={styles.chatListButton}
          onPress={() => navigation.navigate('ChatList')}
        >
          <Icon name="arrow-forward-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.postContainer}>
          {posts.map((post, index) => (
            <View key={index} style={styles.post}>
              <Text style={styles.postEmail}>{post.email}</Text>
              <Text>{post.content}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            Platform.OS === 'ios' && { marginBottom: 25 }, // Adicionando espaço extra no final do TextInput no iOS
            Platform.OS === 'android' && { marginBottom: 20 }, // Adicionando espaço extra no final do TextInput no Android
          ]}
          value={newPost}
          onChangeText={setNewPost}
          placeholder="Digite sua mensagem"
          onSubmitEditing={addPost}
        />
        <TouchableOpacity style={styles.sendButton} onPress={addPost}>
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    backgroundColor: 'silver',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversingWithName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatListButton: {
    padding: 0,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 10,
  },
  postContainer: {
    paddingVertical: 10,
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
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;