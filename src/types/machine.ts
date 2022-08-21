export interface IMachineType {
    title: string;
    type: string;
    blueprint: IBlueprintItem[];
    machines: IMachine[];
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
export interface IMachine {
    fields: IBlueprintItem[]
    id: string;
}