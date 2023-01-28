import { IExerciseRecord } from "../features/exercises/types";

export interface IMachineType {
    title: string;
    type: string;
    blueprint: IBlueprintItem[];
    machines: IMachines[];
    id: string;
}
export enum FieldTypes {
    date = 'date',
    checkbox = 'checkbox',
    number = 'number',
    text = 'text',
    delete = 'delete'
}
export interface IBlueprintItem {
    fieldName: string;
    id: string;
    fieldType: FieldTypes;
    fieldValue: string;
}
export interface IMachines {
    id: string;
    name: string;
}
export interface IMachine {
    id: string;
    name: string;
    records: IExerciseRecord[];
}
export interface Size {
    width: number | undefined;
    height: number | undefined;
  }