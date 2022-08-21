import React, { ChangeEvent, FC, useState } from 'react';
import { FieldTypes } from '../../../types/machine';

const options = [
    FieldTypes.text,
    FieldTypes.number,
    FieldTypes.date,
    FieldTypes.checkbox
];
const CreateAttribute = () => {
    const [fieldTypeValue, setFieldTypeValue] = useState<FieldTypes>(options[0]);
    const selectFieldType = (e: ChangeEvent<HTMLSelectElement>) => {
        setFieldTypeValue(e.target.value as FieldTypes)
    };
    return (
    <div className='mb-2 flex '>
        <input className='border' type="text" />
        <select value={fieldTypeValue} onChange={selectFieldType}>
            {options.map(option => <option key={option} value={option}>{option}</option>) }
        </select>
    </div>
)};

export default React.memo(CreateAttribute);
