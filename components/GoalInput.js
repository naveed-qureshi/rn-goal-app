import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native'

const GoalInput = (props) => {
  const [inputGoal, setInputGoal] = useState('')
  return (
    <View style={style.input}>
      <View style={ style.input_field }>
        <TextInput placeholder="Enter Goal" onChangeText={(et) => setInputGoal(et)} value={inputGoal} />
      </View>
      <View style={{ marginBottom: 3 }} >
        <Button title="Add Goal" onPress={() => props.addGoalhandler(inputGoal)} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3
  },
  input_field: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    flex: 1,
    marginRight: 5
  }
});

export default GoalInput;
