import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './goal/goal.slice';

export const store = configureStore({
    reducer: {
            goals: goalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;