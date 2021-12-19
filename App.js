import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <TextInput style={{borderWidth: 1, borderColor: 'black', padding: 5, marginBottom: 3}} placeholder="Enter Goal"/>
      <View style={{marginBottom: 3}} >
        <Button title="Add Goal" />
      </View>
    </View>
  );
}
