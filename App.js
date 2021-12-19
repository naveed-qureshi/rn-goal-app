import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <TextInput placeholder="Enter Goal"/>
      <View style={{marginBottom: 3}} >
        <Button title="Add Goal" />
      </View>
    </View>
  );
}
