import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goals, AddGoals] = useState([])
  const [inputGoal, setInputGoal] = useState('')
  return (
    <View style={{ padding: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flex: 1, marginRight: 5 }}>
        <TextInput style={{ borderWidth: 1, borderColor: 'black', padding: 5, marginBottom: 3 }} placeholder="Enter Goal" onChangeText={(enteredText) => setInputGoal(enteredText)} value={inputGoal} />
      </View>
      <View style={{ marginBottom: 3 }} >
        <Button title="Add Goal" onPress={() => {
          console.log(goals)
          return AddGoals([...goals, inputGoal])
        }} />
      </View>
    </View>
  );
}
