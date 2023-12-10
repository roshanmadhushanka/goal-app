import React from 'react';
import {View, StyleSheet, Image, Pressable, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {isAddingGoal, setAddingGoal} from "../redux/goal/goal.slice";
import {AppDispatch} from "../redux/store";
import AddGoal from '../component/addItem.component';
import GoalList from '../component/goalList.component';

const Main: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const addGoalModalVisible = useSelector(isAddingGoal);

    const handleOnPressAddNewGoal = () => {
        dispatch(setAddingGoal(true));
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Goal List</Text>
            </View>
            <AddGoal visible={addGoalModalVisible}/>
            <GoalList/>
            <View style={styles.addButtonContainer}>
                <Pressable style={({pressed}) => pressed && styles.pressedButton } onPress={handleOnPressAddNewGoal}>
                    <Image style={styles.addButtonImage} source={require('../../assets/add.png')}/>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a'
    },
    addButtonContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 16,
        alignContent: 'space-between',
    },
    addButtonImage: {
        width: 100,
        height: 100,
    },
    pressedButton: {
        opacity: 0.5,
    },
    titleContainer: {
        marginTop: 50,
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 16
    },
    title: {
        color: '#b180f0',
        fontSize: 20,
        fontWeight: '700',
    }
});

export default Main;