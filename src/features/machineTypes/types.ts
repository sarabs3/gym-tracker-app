import { FieldTypes } from "../../types/machine";



export interface IChangeValuePayload extends IDeletePayload {
    key: string;
    value: string
};
export interface IDeletePayload {
    id: string;
}
export interface IAddNewFieldPayload extends IDeletePayload {
    type: FieldTypes;
}
export interface IUpdateFieldPayload extends IChangeValuePayload {
    fieldId: string;
}
export interface IDeleteAttributePayload extends IDeletePayload {
    fieldId: string;
    key: string;
}
export interface IMachinePayload extends IDeletePayload {
    machineId: string;
}
export interface IMachineFieldUpdatePayload extends IMachinePayload {
    fieldId: string;
    key: string;
    value: string | boolean
}
