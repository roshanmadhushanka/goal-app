import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {isAddingGoal, setAddingGoal} from "../redux/goal/goal.slice";
import {AppDispatch} from "../redux/store";
import AddGoal from '../component/addItem.component';
import GoalList from '../component/goalList.component';

const Main: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const addGoalModalVisible = useSelector(isAddingGoal).slice();

    const handleOnPressAddNewGoal = () => {
        dispatch(setAddingGoal(true));
    }

    return (
        <View style={styles.container}>
            <Button title="Add New Goal!" color='#5e0acc' onPress={handleOnPressAddNewGoal} />
            <AddGoal visible={addGoalModalVisible}/>
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

export default Main;