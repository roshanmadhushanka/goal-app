import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AddGoal from '../component/addItem.component';
import GoalList from '../component/goalList.component';

const Main: React.FC = () => {

    const [addGoalModalVisible, setAddGoalModalVisible] = useState(false);

    const handleOnPressAddNewGoal = () => {
        setAddGoalModalVisible(true);
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