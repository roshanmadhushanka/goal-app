import React from 'react';
import AddGoal from '../component/addItem.component';
import GoalList from '../component/goalList.component';
import {StyleSheet, View} from 'react-native';

const Main: React.FC = () => {
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

export default Main;