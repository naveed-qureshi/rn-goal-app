import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50, flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center'}}>
      <View style={{flex: 1, marginRight: 5}}>
        <TextInput style={{ borderWidth: 1, borderColor: 'black', padding: 5, marginBottom: 3}} placeholder="Enter Goal"/>
      </View>
      <View style={{marginBottom: 3}} >
        <Button title="Add Goal" />
      </View>
    </View>
  );
}
