import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTypes, updateMachineType, addNew, deleteMachineType, addNewField } from './MachineTypesSlice';
import { FieldTypes } from '../../types/machine';
import MachineTypeComponent from './components/MachineTypeComponent';
import PageHeading from '../../app/components/PageHeading';

const MachineTypesList = () => {
    const types = useAppSelector(selectTypes);
    const dispatch = useAppDispatch();
    const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        console.log("asd>", e.target.name, e.target.value, id);
        dispatch(updateMachineType({ id, key: e.target.name,value: e.target.value}));
    }
    const AddNew = () => {
        dispatch(addNew());
    }
    const deleteType = (id: string) => {
        dispatch(deleteMachineType({id}));
    }
    const addField = (id:string, type: FieldTypes) => {
        dispatch(addNewField({id, type}));
    }
    const handleTitleChange = (e: ChangeEvent<HTMLSelectElement>, id: string) => {
        console.log('e.target ==>', e.target.name, e.target.value);
        dispatch(updateMachineType({ id, key: e.target.name,value: e.target.value}));
    }
    return (
        <div className=' bg-gray-100  mb-5 py-3 px-5'>
        <PageHeading>
            <div className='uppercase text-xs'>
                <span className='ml-2'>Total Machine Type:</span>
                <span className='font-bold uppercase text-sm'> {types.length} </span>
            </div>
            <button onClick={AddNew} className='btn-primary'>Add New Type</button>
        </PageHeading>
            <div className='flex flex-wrap rounded'>
                {types.map(type => (
                    <MachineTypeComponent
                        type={type}
                        key={type.id}
                        handleTitleChange={handleTitleChange}
                        addField={addField}
                        deleteType={deleteType}
                        handleChange={handleChange}
                    />
                ))}
            </div>
        </div>
    )
};

export default MachineTypesList;
