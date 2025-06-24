import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

type Habit = { name: string };

export default function HabitScreen() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [input, setInput] = useState('');

  const addHabit = () => {
    if (input.trim()) {
      setHabits([...habits, { name: input }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <FlatList
        data={habits}
        renderItem={({ item }) => <Text style={styles.habit}>{item.name}</Text>}
        keyExtractor={(_, i) => i.toString()}
        style={styles.list}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new habit..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Habit" onPress={addHabit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  list: { flex: 1, marginBottom: 10 },
  habit: { fontSize: 18, marginVertical: 4 },
  input: { borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
}); 