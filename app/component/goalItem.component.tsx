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
        <View style={styles.goalItem}>
            <Pressable onPress={removeGoalHandler} style={({pressed}) => pressed && styles.pressedItem }>
                <Text style={styles.goalText}>{props.goalText}</Text>
            </Pressable>
        </View>    
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})

export default GoalItem;