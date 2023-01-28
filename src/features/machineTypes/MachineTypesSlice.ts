import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IMachineType } from "../../types/machine";
import { v4 as uuidv4 } from "uuid";
import {
  IAddNewFieldPayload,
  IChangeValuePayload,
  IDeleteAttributePayload,
  IDeletePayload,
  IMachineFieldUpdatePayload,
  IMachinePayload,
  IUpdateFieldPayload,
} from "./types";

const newMachineType = {
  title: "",
  type: "",
  blueprint: [],
  machines: [],
};

export interface MachineTypesState {
  machines: IMachineType[];
}
const initialState: MachineTypesState = {
  machines: [],
};
export const MachineTypesSlice = createSlice({
  name: "machineTypes",
  initialState,
  reducers: {
    updateMachineType: (
      state,
      { payload }: PayloadAction<IChangeValuePayload>
    ) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      Object.assign(machine, { [payload.key]: payload.value });
    },
    addNew: (state, { payload }: PayloadAction<{name: string}>) => {
      const uuid = uuidv4();
      state.machines.push({ ...newMachineType, id: uuid, type: payload.name });
    },
    deleteMachineType: (state, { payload }: PayloadAction<IDeletePayload>) => {
      const machine = state.machines.findIndex(
        (machine) => machine.id === payload.id
      );
      if (machine < 0) return;
      state.machines.splice(machine, 1);
    },
    addNewField: (state, { payload }: PayloadAction<IAddNewFieldPayload>) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      const newField = {
        fieldName: "",
        fieldType: payload.type,
        id: uuidv4(),
        fieldValue: "",
      };
      machine.blueprint.push(newField);
      machine.machines = machine.machines.map((userMachine) => {
        // userMachine.fields.push(newField);
        return userMachine;
      });
    },
    updateFieldName: (
      state,
      { payload }: PayloadAction<IUpdateFieldPayload>
    ) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      const blueprint = machine.blueprint.find(
        (print) => print.id === payload.fieldId
      );
      if (!blueprint) return;
      Object.assign(blueprint, {
        [payload.key]: payload.value,
        fieldValue: "",
      });
      machine.machines = machine.machines.map((userMachine) => {
        // const updatedField = userMachine.fields.find(
        //   (field) => field.id === payload.fieldId
        // );
        // if (!updatedField) return userMachine;
        // Object.assign(updatedField, {
        //   [payload.key]: payload.value,
        //   fieldValue: "",
        // });
        return userMachine;
      });
    },
    addMachine: (state, { payload }: PayloadAction<{ name: string, id: string, exerciseId: string }>) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      const checkIfAlreadyAdded = machine.machines.findIndex(m => m.id === payload.exerciseId);
      if (checkIfAlreadyAdded > -1) {
        machine.machines.splice(checkIfAlreadyAdded, 1);
      } else {
        machine.machines.push({
          id: payload.exerciseId,
          name: payload.name,
        });
      }
    },
    deleteMachine: (state, { payload }: PayloadAction<IMachinePayload>) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      const userMachine = machine.machines.findIndex(
        (machine) => machine.id === payload.machineId
      );
      if (userMachine < 0) return;
      machine.machines.splice(userMachine, 1);
    },
    updateMachineField: (
      state,
      { payload }: PayloadAction<IMachineFieldUpdatePayload>
    ) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      const userMachine = machine.machines.find(
        (machine) => machine.id === payload.machineId
      );
      if (!userMachine) return;
    },
    deleteAttribute: (
      state,
      { payload }: PayloadAction<IDeleteAttributePayload>
    ) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      machine.blueprint = machine.blueprint.filter(
        (field) => field.id !== payload.fieldId
      );
    },
  },
});

export const {
  updateMachineType,
  addNew,
  deleteMachineType,
  addNewField,
  updateFieldName,
  deleteMachine,
  updateMachineField,
  deleteAttribute,
  addMachine,
} = MachineTypesSlice.actions;

export const selectTypes = (state: RootState) => state.machineTypes.machines;
export const selectMachines = (id: string | undefined) => (state: RootState) =>
  state.machineTypes.machines.find((machine) => machine.id === id)?.machines;
export const selectExercises = (id: string | undefined, exerciseId: string | undefined) => (state: RootState) =>
  state.machineTypes.machines.find((machine) => machine.id === id)?.machines.find((exercise) => exercise.id === exerciseId);
export const selectTitleField =
  (id: string | undefined) => (state: RootState) =>
    state.machineTypes.machines.find((machine) => machine.id === id)?.title;

export default MachineTypesSlice.reducer;
