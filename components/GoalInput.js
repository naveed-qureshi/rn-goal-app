import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = (props) => {
  const [inputGoal, setInputGoal] = useState('')
  return (
    <Modal visible= { props.visible } animationType='fade'>
      <View style={style.input}>
        <View style={ style.input_field }>
          <TextInput placeholder="Enter Goal" onChangeText={(et) => setInputGoal(et)} value={inputGoal} />
        </View>
        <View style={style.button} >
          <Button title="Cancel" color='red' onPress={ () => props.setIsAddMode(false) } />
          <Button title="Add Goal" onPress={() => props.addGoalhandler(inputGoal)} />
        </View>
      </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  input: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)'
  },
  input_field: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 5,
    width: '80%'
  },
  button: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default GoalInput;
