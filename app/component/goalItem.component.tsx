import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type GoalItemProps = {
    id: string,
    goalText: string,
}

const GoalItem: React.FC<GoalItemProps> = (props: GoalItemProps) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.goalText}</Text>
        </View>
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