import { StyleSheet, Text, View } from 'react-native';

import * as UltraWideBand from 'expo-uwb';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{UltraWideBand.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
