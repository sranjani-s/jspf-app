import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
 return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Mid-year Checkpoint</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EAED'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
