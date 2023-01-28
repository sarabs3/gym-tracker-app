import React, { ChangeEvent, FC } from 'react';

interface Props {
    id: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
}

const Input: FC<Props> = ({ id, name, value, onChange, type = "text" }) => {
    if (type === 'checkbox') {
        return (
            <div className='mb-2 flex flex-row-reverse justify-end items-center'>
                <label className='ml-3 text-sm mb-1' htmlFor={id}>{name}</label>
                <input
                    name={id}
                    className=' border rounded py-1 px-2 bg-white'
                    checked={Boolean(value)}
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </div>

        )
    }
    return (
    <div className='mb-2 flex flex-col'>
        <label className='text-xs mb-1 font-semibold' htmlFor={id}>{name}</label>
        <input
            name={id}
            className='border rounded py-3 px-2 bg-white'
            type={type}
            id={id}
            value={value}
            onChange={onChange}
        />
    </div>
)};

export default React.memo(Input);
