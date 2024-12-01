import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

// Define the type for a message
type Message = {
  id: string;
  text: string;
};

const ChattingPage = () => {
  // Define the state with the correct type
  const [messages, setMessages] = useState<Message[]>([]); // messages is an array of Message objects
  const [currentMessage, setCurrentMessage] = useState(''); // Input text

  // Function to handle sending messages
  const sendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text: currentMessage },
      ]);
      setCurrentMessage('');
    }
  };

  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Chat Messages Display */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.voice}>
          <Image
            source={require('../../assests/icons/voice.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          value={currentMessage}
          onChangeText={setCurrentMessage}
          placeholder="Type your message..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
       
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  voice: {
    marginLeft: 2, // Space between search bar and voice icon
    justifyContent: 'center',
    alignItems: 'center',
    
   
    
    borderRadius:20,
  },image:{
    width: 20,
    height: 20,
    tintColor: '#6ab04c',
    padding:0,
    margin:0,
    
},
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Messages stick to the bottom
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#6ab04c',
    borderRadius: 8,
    padding: 10,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom:10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    height: 40,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#6ab04c',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChattingPage;
