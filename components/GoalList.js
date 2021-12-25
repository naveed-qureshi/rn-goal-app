import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

const GoalList = (props) => {
  return (
    <View>
      <FlatList
        data={props.goals}
        keyExtractor={ item => item.key }
        renderItem={(listItem) => (
          <View >
            <Text style={ style.text_output } onPress={() => props.deleteItem(listItem.item.key) } > { listItem.item.data } </Text>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  text_output: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginBottom: 3
  }
})

export default GoalList;
