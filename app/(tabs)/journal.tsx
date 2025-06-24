import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function JournalScreen() {
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    // TODO: Integrate with Firebase to save journal entry
    alert('Journal entry saved (placeholder)!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your thoughts..."
        value={entry}
        onChangeText={setEntry}
        multiline
      />
      <Button title="Save Entry" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 200, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 20, textAlignVertical: 'top' },
}); 