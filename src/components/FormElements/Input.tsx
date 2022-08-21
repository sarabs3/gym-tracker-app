import React, { ChangeEvent, FC } from 'react';

interface Props {
    id: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const Input: FC<Props> = ({ id, name, value, onChange, type = "text" }) => (
    <div className='mb-2 flex flex-col'>
        <label htmlFor={id}>{name}</label>
        <input name={name} className='border' type={type} id={id} value={value} onChange={onChange} />
    </div>
);

export default React.memo(Input);
