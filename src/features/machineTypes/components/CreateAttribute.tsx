import React, { ChangeEvent, FC, useState } from 'react';
import { FieldTypes } from '../../../types/machine';

const options = [
    FieldTypes.text,
    FieldTypes.number,
    FieldTypes.date,
    FieldTypes.checkbox
];
interface Props {
    onNameChange: (e: string, v: string) => void
    name: string;
    type: FieldTypes;
}
const CreateAttribute: FC<Props> = ({ onNameChange, name, type }) => {
    const [inputFeild, setInputField] = useState(name);
    const [fieldTypeValue, setFieldTypeValue] = useState<FieldTypes>(type || options[0]);
    const selectFieldType = (e: ChangeEvent<HTMLSelectElement>) => {
        setFieldTypeValue(e.target.value as FieldTypes);
        onNameChange(e.target.name, e.target.value);
    };
    const updateName = (e: ChangeEvent<HTMLInputElement>) => {
        setInputField(e.target.value);
        onNameChange(e.target.name, e.target.value);
    }
    return (
    <div className='mb-2 flex'>
        <input className='border' type="text" name='fieldName' value={inputFeild} onChange={updateName} />
        <select name='fieldType' value={fieldTypeValue} onChange={selectFieldType}>
            {options.map(option => <option key={option} value={option}>{option}</option>) }
        </select>
    </div>
)};

export default React.memo(CreateAttribute);
