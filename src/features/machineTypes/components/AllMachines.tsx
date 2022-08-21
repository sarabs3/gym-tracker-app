import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
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
        <div className="flex flex-col">
            {allTypes.map(type => (
                <div key={type.id} className="flex">
                    <h4>{type.type}</h4>
                    {type.machines.map(machine => (
                        <Machine
                        machine={machine}
                        machineDelete={machineDelete}
                        handleChange={handleChange}
                    />
                    ))}
                </div>
            ))}
        </div>
    )
};

export default AllMachines;
