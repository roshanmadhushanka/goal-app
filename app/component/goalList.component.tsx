import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { allGoals } from '../redux/goal/goal.slice';
import GoalItem from './goalItem.component';

const GoalList: React.FC = () => {

    const goals = useSelector(allGoals).slice();

    return (
        <View style={styles.goalsContainer}>
            <FlatList data={goals} renderItem={(goal) => (
                <GoalItem id={goal.item.id} goalText={goal.item.text}/>
            )} keyExtractor={(item, index) => item.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 4,
        paddingBottom: 50
    },
})

export default GoalList;