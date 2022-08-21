import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Input from '../../components/FormElements/Input';
import { selectTypes, updateMachineType, addNew, deleteMachineType, addNewField } from './MachineTypesSlice';
import { ReactComponent as DeleteIcon} from '../../assets/icons/delete.svg';
import AddNewField from './components/AddNewField';
import { FieldTypes } from '../../types/machine';
import MachineTypeFields from './MachineTypeFields';
import Select from '../../components/FormElements/Select';
import MachineTypeComponent from './components/MachineTypeComponent';

const MachineTypesList = () => {
    const types = useAppSelector(selectTypes);
    const dispatch = useAppDispatch();
    const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
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
        <div className='flex flex-wrap'>
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
            <div className='p-10 m-2 border'>
            <button onClick={AddNew} className='p-3 border'>Add New</button>
            </div>
        </div>
    )
};

export default MachineTypesList;
