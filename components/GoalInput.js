import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native'

const GoalInput = (props) => {
  const [inputGoal, setInputGoal] = useState('')
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flex: 1, marginRight: 5 }}>
        <TextInput style={{ borderWidth: 1, borderColor: 'black', padding: 5, marginBottom: 3 }} placeholder="Enter Goal" onChangeText={(et) => setInputGoal(et)} value={inputGoal} />
      </View>
      <View style={{ marginBottom: 3 }} >
        <Button title="Add Goal" onPress={() => props.addGoalhandler(inputGoal)} />
      </View>
    </View>
  )
}

export default GoalInput;
