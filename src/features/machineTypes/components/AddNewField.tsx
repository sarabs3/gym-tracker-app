import React, { ChangeEvent, FC, useState } from 'react';

interface Props {
    addField: (e: FieldTypes) => void
}
enum FieldTypes {
    date = 'date',
    checkbox = 'checkbox',
    number = 'number',
    text = 'text'
}

const options = [
    FieldTypes.text,
    FieldTypes.number,
    FieldTypes.date,
    FieldTypes.checkbox
];
const AddNewField: FC<Props> = ({ addField }) => {
    const [fieldTypeValue, setFieldTypeValue] = useState<FieldTypes>();
    const selectFieldType = (e: ChangeEvent<HTMLSelectElement>) => {
        setFieldTypeValue("" as FieldTypes);
        addField(e.target.value as FieldTypes);
    };
    return (
    <div className='mb-2 flex'>
        <select className='bg-blue-700 py-2 w-full rounded text-white px-3' value={fieldTypeValue} onChange={selectFieldType}>
            <option value="">Add New Field</option>
            {options.map(option => <option key={option} value={option}>{option}</option>) }
        </select>
    </div>
)};

export default AddNewField;
