import React from 'react';
import {Provider} from "react-redux";
import { StyleSheet, View } from 'react-native';
import 'react-native-get-random-values';
import GoalList from './component/goalList.component';
import AddGoal from './component/addItem.component';
import {store} from "./redux/store";

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <View style={styles.container}>
              <AddGoal/>
              <GoalList/>
          </View>
      </Provider>
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