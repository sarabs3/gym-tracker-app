import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Input from '../../components/FormElements/Input';
import { addMachine, selectMachines, deleteMachine, updateMachineField } from './MachineTypesSlice';
import { Navigate, useParams } from 'react-router-dom';
import AllMachines from './components/AllMachines';
import Machine from './components/Machine';

const Machines = () => {
    const params = useParams();
    const machines = useAppSelector(selectMachines(params?.id));
    const dispatch = useAppDispatch();
    const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string, fieldId: string) => {
        if (!params?.id) return;
        dispatch(updateMachineField({
            id: params.id,
            machineId: id,
            fieldId,
            key: 'fieldValue',
            value: e.target.value
        }));
    }
    const AddNew = () => {
        if (!params?.id) return;
        dispatch(addMachine({ id: params.id }));
    }
    const machineDelete = (id: string) => {
        if (!params?.id) return;
        dispatch(deleteMachine({id: params.id, machineId: id}));
    }
    if (!params?.id) return <Navigate to="/types" />
    if (params.id === 'all') return <AllMachines />
    return (
        <div className='container'>
            <div className='flex'>
                {machines?.map(machine => (
                    <Machine
                        machine={machine}
                        machineDelete={machineDelete}
                        handleChange={handleChange}
                    />
                ))}
                <div className='p-10 m-2 border'>
                    <button onClick={AddNew} className='p-3 border'>Add New</button>
                </div>
            </div>
        </div>
    )
};

export default Machines;
