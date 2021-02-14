import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from './Themed';
import Task from '../components/Task';

export default function EditScreenInfo() {
  return (
    <View>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Deadline: May 15, 2021, 11:59pm IST
        </Text>

        <View style={styles.items}>
          <Task text={'Project Abstract'}> </Task>
          <Task text={'Statement of purpose'}> </Task>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  }
});
