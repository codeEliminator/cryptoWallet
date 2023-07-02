import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import NavigationBar from './Components/Navigation/Navigation.js';

export default function App() {
  return (
    <View style={styles.container}>
     <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    bottom: 0,
    right: 0,
    flex:1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black'
  },
});