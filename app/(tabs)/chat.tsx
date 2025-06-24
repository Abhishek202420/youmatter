import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const moods = ['😊', '😐', '😢', '😡', '😱'];

type Message = { text: string; mood: string | null };

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [mood, setMood] = useState<string | null>(null);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, mood }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat & Mood Tracker</Text>
      <View style={styles.moodRow}>
        {moods.map((m, i) => (
          <Text
            key={i}
            style={[styles.mood, mood === m && styles.selectedMood]}
            onPress={() => setMood(m)}>
            {m}
          </Text>
        ))}
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={styles.message}>{item.mood ? item.mood + ' ' : ''}{item.text}</Text>
        )}
        keyExtractor={(_, i) => i.toString()}
        style={styles.messages}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  moodRow: { flexDirection: 'row', marginBottom: 10 },
  mood: { fontSize: 28, marginHorizontal: 8 },
  selectedMood: { borderBottomWidth: 2, borderColor: '#007AFF' },
  messages: { flex: 1, marginBottom: 10 },
  message: { fontSize: 16, marginVertical: 2 },
  input: { borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
}); 