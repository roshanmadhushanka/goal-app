import React, {useState} from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import { AppDispatch } from '../redux/store';
import { addGoal } from '../redux/goal/goal.slice';

interface AddGoalProps {
    visible: boolean,
}

const AddGoal: React.FC<AddGoalProps> = (props) => {
    
    const dispatch = useDispatch<AppDispatch>();
    const [goalText, setGoalText] = useState('');

    const goalInputHandler = (inputText: string) => {
        setGoalText(inputText);
    }

    const addGoalHandler = () => {
        dispatch(addGoal({
            id: uuidv4(),
            text: goalText,
        }));
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
});

export default AddGoal;