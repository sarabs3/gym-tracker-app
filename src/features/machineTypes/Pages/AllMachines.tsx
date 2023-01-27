import { ChangeEvent } from "react";
import PageHeading from "../../../components/PageHeading";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  addMachine,
  deleteMachine,
  selectTypes,
  updateMachineField,
} from "../MachineTypesSlice";
import Machine from "../components/Machine";
import NoMachines from "../../../components/NoMachines";
import { Link } from "react-router-dom";

const AllMachines = () => {
  const allTypes = useAppSelector(selectTypes);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    machineId: string,
    fieldId: string,
    id: string
  ) => {
    dispatch(
      updateMachineField({
        id,
        machineId,
        fieldId,
        key: "fieldValue",
        value: e.target.value,
      })
    );
  };
  const machineDelete = (machineId: string, id: string) => {
    dispatch(deleteMachine({ id, machineId }));
  };
  const addNewObject = (id: string) => {
    // dispatch(addMachine({ id }));
  };
  if (allTypes.length === 0) return <NoMachines>
  <Link
    className="text-sm underline text-blue-400 hover:text-blue-700"
    to="/types"
  >
    Create new machine types.
  </Link>
  </NoMachines>
  return (
    <div className="flex flex-col container ">
      {allTypes.map((type) => (
        <div key={type.id} className="bg-gray-100 rounded mb-5 py-3 px-5">
          <PageHeading>
            <div className="uppercase text-xs">
              <span className="ml-2">Machine Type:</span>
              <span className="font-bold uppercase text-sm">{type.type} /</span>
              <span className="ml-2">Total machines:</span>
              <span className="font-bold uppercase text-sm">
                {type.machines.length}
              </span>
            </div>
            <div>
              <button
                onClick={() => addNewObject(type.id)}
                className="btn-primary"
              >
                Add New {type.type}
              </button>
            </div>
          </PageHeading>
          {type.machines?.length === 0 && (
            <NoMachines><p className="text-sm">Add new machine</p></NoMachines>
          )}
          <div className="flex flex-wrap">
            {type.machines.map((machine) => (
              <Machine
                key={machine.id}
                machine={machine}
                titleField={type.title}
                machineDelete={(machineId) => machineDelete(machineId, type.id)}
                handleChange={(e, id, fieldId) =>
                  handleChange(e, id, fieldId, type.id)
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMachines;
