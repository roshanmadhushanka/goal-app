import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { removeGoal } from '../redux/goal/goal.slice';

type GoalItemProps = {
    id: string,
    goalText: string,
}

const GoalItem: React.FC<GoalItemProps> = (props: GoalItemProps) => {

    const dispatch = useDispatch<AppDispatch>();

    const removeGoalHandler = () => {
        dispatch(removeGoal(props.id));
    }

    return (
        <Pressable onPress={removeGoalHandler}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.goalText}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    }
})

export default GoalItem;