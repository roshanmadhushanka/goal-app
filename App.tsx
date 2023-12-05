import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-get-random-values';
import GoalList from './app/component/goalList.component';
import AddGoal from './app/component/addItem.component';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AddGoal/>
      <GoalList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
});

export default App;