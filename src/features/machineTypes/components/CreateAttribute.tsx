import React, { ChangeEvent, FC, useState } from 'react';
import { FieldTypes } from '../../../types/machine';
import { ReactComponent as DeleteIcon} from '../../../assets/icons/delete.svg';

const options = [
    FieldTypes.text,
    FieldTypes.number,
    FieldTypes.date,
    FieldTypes.checkbox,
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
        <input className='border rounded py-1 px-2 bg-white w-9/12' type="text" name='fieldName' value={inputFeild} onChange={updateName} />
        <select
            className='border rounded py-1 px-2 form-select appearance-none bg-white bg-clip-padding bg-no-repeat w-2/4'
            name='fieldType'
            value={fieldTypeValue}
            onChange={selectFieldType}
        >
            {options.map(option => <option key={option} value={option}>{option}</option>) }
        </select>
        <button onClick={() => onNameChange('fieldType', FieldTypes.delete)} className='border shadow p-1 hover:bg-red-200 transition rounded'>
            <DeleteIcon className='cursor-pointer' width={30} stroke='red' /></button>
    </div>
)};

export default React.memo(CreateAttribute);
