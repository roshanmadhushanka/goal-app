import React, {useState} from 'react';
import {View, TextInput, Button, Modal, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {AppDispatch} from '../redux/store';
import {addGoal, setAddingGoal} from '../redux/goal/goal.slice';

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

    const cancelHandler = () => {
        dispatch(setAddingGoal(false));
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../../assets/goal.png')}/>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={cancelHandler} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});

export default AddGoal;