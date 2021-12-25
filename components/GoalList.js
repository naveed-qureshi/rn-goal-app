import React from 'react';
import { View, FlatList, Text } from 'react-native';

const GoalList = (props) => {
  return (
    <View>
      <FlatList
        data={props.goals}
        keyExtractor={ item => item.key }
        renderItem={(listItem) => (
          <View >
            <Text style={ { borderColor: 'black', borderWidth: 1, padding: 5, marginBottom: 3 } } onPress={() => props.deleteItem(listItem.item.key) } > { listItem.item.data } </Text>
          </View>
        )}
      />
    </View>
  );
}

export default GoalList;
