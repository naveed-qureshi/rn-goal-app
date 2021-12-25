import { Button, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goals, AddGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const deleteItem = (goalId) => {
    AddGoals((goals) => goals.filter((item) => item.key != goalId))
  }

  const addGoalhandler = (goal) => {
    AddGoals(() => [...goals, {key: Math.random().toString(), data: goal }])
    setIsAddMode(false);
  }

  return (
    <View style={ style.p_50 }>
      <View style={ style.mb_10 }>
        <Button title='Add Goal' onPress={()=> setIsAddMode(true)}></Button>
      </View>
      <GoalInput addGoalhandler={addGoalhandler} visible={ isAddMode } setIsAddMode={setIsAddMode}/>
      <GoalList deleteItem={deleteItem} goals={goals} />
    </View>
  );
}

const style = StyleSheet.create({
  p_50: {
    flex:1,
    padding: 50,
    backgroundColor: 'rgb(255, 255, 255)'
  },

  mb_10: {
   marginBottom: 10
  }
})
