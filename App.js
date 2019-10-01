import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Provider from "./client/Provider";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider/>
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
