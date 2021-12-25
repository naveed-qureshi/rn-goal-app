import { View } from 'react-native';
import React, { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goals, AddGoals] = useState([])
  const deleteItem = (goalId) => {
    AddGoals((goals) => goals.filter((item) => item.key != goalId))
  }

const addGoalhandler = (goal) => {
  AddGoals(() => [...goals, {key: Math.random().toString(), data: goal }])
}
  return (
    <View style={{ padding: 50}}>
      <GoalInput addGoalhandler={addGoalhandler}/>
      <GoalList deleteItem={deleteItem} goals={goals} />
    </View>
  );
}
