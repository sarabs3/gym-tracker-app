export interface IMachineType {
    title: string;
    type: string;
    blueprint: IBlueprintItem[];
    machines?: [];
    id: string;
}
export enum FieldTypes {
    date = 'date',
    checkbox = 'checkbox',
    number = 'number',
    text = 'text'
}
export interface IBlueprintItem {
    fieldName: string;
    id: string;
    fieldType: FieldTypes;
}