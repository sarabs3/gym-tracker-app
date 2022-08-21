import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../../components/PageHeading";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addMachine, deleteMachine, selectTypes, updateMachineField } from "../MachineTypesSlice";
import Machine from "./Machine";

const AllMachines = () => {
    const params = useParams();
    const allTypes = useAppSelector(selectTypes);
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>, machineId: string, fieldId: string, id: string) => {
        dispatch(updateMachineField({
            id,
            machineId,
            fieldId,
            key: 'fieldValue',
            value: e.target.value
        }));
    }
    const machineDelete = (id: string) => {
        if (!params?.id) return;
        dispatch(deleteMachine({id: params.id, machineId: id}));
    }
    const addNewObject = (id: string) => {
        dispatch(addMachine({id}));
    };
    return (
        <div className="flex flex-col container ">
            {allTypes.map(type => (
                <div key={type.id} className="bg-gray-100 rounded mb-5 py-3 px-5">
                    <PageHeading>
                        <div className='uppercase text-xs'>
                            <span className='ml-2'>Machine Type:</span>
                            <span className='font-bold uppercase text-sm'> {type.type} / </span>
                            <span className='ml-2'>Total machines:</span>
                            <span className='font-bold uppercase text-sm'> {type.machines.length} </span>
                        </div>
                        <div>
                            <button onClick={() => addNewObject(type.id)} className='btn-primary'>Add New {type.type}</button>
                        </div>

                    </PageHeading>
                    <div  className="flex flex-wrap">
                    {type.machines.map(machine => (
                        <Machine
                            key={machine.id}
                            machine={machine}
                            titleField={type.title}
                            machineDelete={machineDelete}
                            handleChange={(e, id, fieldId) => handleChange(e, id, fieldId, type.id)}
                        />
                    ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default AllMachines;
