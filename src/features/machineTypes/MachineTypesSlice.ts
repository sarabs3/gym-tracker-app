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
    addNew: (state) => {
      const uuid = uuidv4();
      state.machines.push({ ...newMachineType, id: uuid });
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
        userMachine.fields.push(newField);
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
        const updatedField = userMachine.fields.find(
          (field) => field.id === payload.fieldId
        );
        if (!updatedField) return userMachine;
        Object.assign(updatedField, {
          [payload.key]: payload.value,
          fieldValue: "",
        });
        return userMachine;
      });
    },
    addMachine: (state, { payload }) => {
      const machine = state.machines.find(
        (machine) => machine.id === payload.id
      );
      if (!machine) return;
      machine.machines.push({ fields: machine.blueprint, id: uuidv4() });
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
      const fieldToUpdate = userMachine.fields.find(
        (field) => field.id === payload.fieldId
      );
      if (!fieldToUpdate) return;
      Object.assign(fieldToUpdate, { [payload.key]: payload.value });
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
      machine.machines = machine.machines.map((userMachine) => {
        const remainingFields = userMachine.fields.filter(
          (field) => field.id !== payload.fieldId
        );
        return { fields: remainingFields, id: userMachine.id };
      });
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
export const selectTitleField =
  (id: string | undefined) => (state: RootState) =>
    state.machineTypes.machines.find((machine) => machine.id === id)?.title;

export default MachineTypesSlice.reducer;
