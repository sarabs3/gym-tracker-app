import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { v4 as uuidv4 } from "uuid";
import { IExercise } from "./types";

export interface ExercisesState {
  exercises: IExercise[];
}
const initialState: ExercisesState = {
  exercises: [
    {
      id: uuidv4(),
      name: 'Dumbell Bench Press',
      records: [],
    },
    {
      id: uuidv4(),
      name: 'Dumbell Incline Press',
      records: [],
    },
    {
      id: uuidv4(),
      name: 'Dumbell Fly',
      records: [{
        reps: 1,
        weight: 10,
        date: `${new Date()}`,
        id: uuidv4(),
      }],
    },
    {
      id: uuidv4(),
      name: 'Rotational Dumbell Press',
      records: [],
    },
    {
      id: uuidv4(),
      name: 'Push Ups',
      records: [],
    },
    {
      id: uuidv4(),
      name: 'Bench Press',
      records: [],
    }
  ],
};
export const ExercisesSlice = createSlice({
  name: "machineTypes",
  initialState,
  reducers: {
    addExerciseRecord: (state, { payload }: PayloadAction<{ id: string, reps: number, weight: number, date: string }>) => {
      console.log('payload', payload);
      const machine = state.exercises.findIndex(ex => ex.id === payload.id);
      console.log('machine', machine, state.exercises[machine].name);
      if (machine > -1) {
        console.log('1yes')
        state.exercises[machine].records.push({
          reps: payload.reps,
          weight: payload.weight,
          date: payload.date,
          id: uuidv4(),
        });
      } else {

        console.log('no')
      }
    },
  },
});

export const {
  addExerciseRecord,
} = ExercisesSlice.actions;
export const selectExercises = (state: RootState) => state.exercises.exercises;
export const selectExercise = (id: string) => (state: RootState) => {
  console.log('exer', id, state.exercises.exercises);
  return state.exercises.exercises.find(ex => ex.id === id);
};


export default ExercisesSlice.reducer;