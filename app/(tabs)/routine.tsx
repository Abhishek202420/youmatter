import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

type Routine = { name: string };

export default function RoutineScreen() {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [input, setInput] = useState('');

  const addRoutine = () => {
    if (input.trim()) {
      setRoutines([...routines, { name: input }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routine Builder</Text>
      <FlatList
        data={routines}
        renderItem={({ item }) => <Text style={styles.routine}>{item.name}</Text>}
        keyExtractor={(_, i) => i.toString()}
        style={styles.list}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new routine..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Routine" onPress={addRoutine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  list: { flex: 1, marginBottom: 10 },
  routine: { fontSize: 18, marginVertical: 4 },
  input: { borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
}); 