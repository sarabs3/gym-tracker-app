import { ChangeEvent } from "react";
import { Link, useParams } from "react-router-dom";
import PageHeading from "../../../app/components/PageHeading";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteMachine, selectTypes, updateMachineField } from "../MachineTypesSlice";
import Machine from "./Machine";

const AllMachines = () => {
    const params = useParams();
    const allTypes = useAppSelector(selectTypes);
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
    const machineDelete = (id: string) => {
        if (!params?.id) return;
        dispatch(deleteMachine({id: params.id, machineId: id}));
    }
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
                            <Link to={`/types/${type.id}`} className='btn-primary'>Add New {type.type}</Link>
                        </div>

                    </PageHeading>
                    <div  className="flex flex-wrap">
                    {type.machines.map(machine => (
                        <Machine
                        machine={machine}
                        machineDelete={machineDelete}
                        handleChange={handleChange}
                    />
                    ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default AllMachines;
