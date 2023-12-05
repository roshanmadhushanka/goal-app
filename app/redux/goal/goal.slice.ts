import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Type declarations
export interface Goal {
    id: string,
    text: string,
}

// State definition
export interface GoalState {
    goals: Goal[],
}

// Initial state
const initialState: GoalState = {
    goals: [],
}

// Reducer functions
// Add goal reducer function
const addGoalReducer: CaseReducer<GoalState, PayloadAction<Goal>> = (state, action) => {
    state.goals.push(action.payload);
}

// Remove goal reducer function
const removeGoalReducer: CaseReducer<GoalState, PayloadAction<string>> = (state, action) => {
    state.goals = state.goals.filter((goal) => goal.id !== action.payload);
}

// Slice definition
const goalSlice = createSlice({
    name: 'goalSlice',
    initialState,
    reducers: {
        addGoal(state, action: PayloadAction<Goal>) {
            addGoalReducer(state, action);
        },
        removeGoal(state, action: PayloadAction<string>) {
            removeGoalReducer(state, action);
        }
    },
})

// Exports
export const {addGoal, removeGoal} = goalSlice.actions;
export const allGoals = (state: RootState) => state.goals.goals;

export default goalSlice.reducer;

