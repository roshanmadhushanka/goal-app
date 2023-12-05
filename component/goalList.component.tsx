import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from './goalItem.component';
import { Goal } from './goal.types';

type GoalListProps = {
    goals: Goal[],
}

const GoalList: React.FC<GoalListProps> = (props: GoalListProps) => {
    return (
        <View style={styles.goalsContainer}>
            <FlatList data={props.goals} renderItem={(goal) => <GoalItem key={goal.item.id} goalText={goal.item.text}/>} keyExtractor={(item, index) => item.id}/>
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