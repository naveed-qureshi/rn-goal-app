import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [goals, AddGoals] = useState([])
  const [inputGoal, setInputGoal] = useState('')
  const deleteItem = (goalId) => {
    AddGoals((goals) => goals.filter((item) => item.key != goalId))
  }

const addGoalhandler = () => {
  AddGoals((g) => [...g, {key: Math.random().toString(), data: inputGoal }])
}
  return (
    <View style={{ padding: 50}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <TextInput style={{ borderWidth: 1, borderColor: 'black', padding: 5, marginBottom: 3 }} placeholder="Enter Goal" onChangeText={(enteredText) => setInputGoal(enteredText)} value={inputGoal} />
        </View>
        <View style={{ marginBottom: 3 }} >
          <Button title="Add Goal" onPress={() => addGoalhandler()} />
        </View>
      </View>
      <FlatList
        keyExtractor={ item => item.key }
        data={goals}
        renderItem={(listItem) => (
          <View >
            <Text style={ { borderColor: 'black', borderWidth: 1, padding: 5, marginBottom: 3 } } onPress={() => deleteItem(listItem.item.key) } > { listItem.item.data } </Text>
          </View>
        )}
      />
    </View>
  );
}
