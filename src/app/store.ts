import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ExercisesSlice from '../features/exercises/ExerciseSlice';
import MachineTypesSlice from '../features/machineTypes/MachineTypesSlice';

function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
}

export const store = configureStore({
  reducer: {
    machineTypes: MachineTypesSlice,
    exercises: ExercisesSlice,
  },
  preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
