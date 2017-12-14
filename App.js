import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { yellow } from '../../Library/Caches/typescript/2.6/node_modules/@types/color-name';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView}/>
        <View style={styles.yellowView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  redView:{
    flex: 1,
    backgroundColor: 'red',
  },
  yellowView:{
    flex: 1,
    backgroundColor: 'yellow',
  }
});