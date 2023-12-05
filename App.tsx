import React, {useState} from 'react';
import { StyleSheet, FlatList, View, Button, TextInput, Text } from 'react-native';
import GoalItem from './component/goalItem.component';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';

type Goal = {
  key: string,
  text: string,
}

const App: React.FC = () => {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState<Goal[]>([])

  const goalInputHandler = (inputText: string) => {
    setGoalText(inputText);
  }

  const addGoalHandler = () => {
    /**
     * By using the functional form of the state update and spreading the previous state, 
     * you ensure that you are working with the latest state and avoid potential race conditions. 
     * This pattern is generally recommended when updating state based on its previous value.
     * 
     * This approach is recommended to avoid potential issues related to the asynchronous nature of state updates in React.
     */
    setGoals(currentGoals => [...currentGoals, 
      {key: uuidv4(), text: goalText}]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(goal) => <GoalItem key={goal.item.key} goalText={goal.item.text}/>}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4,
    paddingBottom: 50
  },
});

export default App;