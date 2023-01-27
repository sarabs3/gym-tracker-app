import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addMachine,
  selectMachines,
  deleteMachine,
  updateMachineField,
  selectTitleField,
} from "./MachineTypesSlice";
import { Navigate, useParams } from "react-router-dom";
import PageHeading from "../../components/PageHeading";
import { FieldTypes } from "../../types/machine";
import NoMachines from "../../components/NoMachines";
import MachineList from "./components/List";
import Input from "../../components/FormElements/Input";

const Machines = () => {
  const params = useParams();
  const machines = useAppSelector(selectMachines(params?.id));
  const titleField = useAppSelector(selectTitleField(params.id));
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [addRep, setAddRep] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string,
    fieldId: string
  ) => {
    if (!params?.id) return;
    let value: string | boolean = e.target.value;
    if (e.target.type === FieldTypes.checkbox) {
      value = e.target.checked
    }
    dispatch(
      updateMachineField({
        id: params.id,
        machineId: id,
        fieldId,
        key: "fieldValue",
        value: value,
      })
    );
  };
  const AddNew = () => {
    if (!params?.id) return;
    dispatch(addMachine({ id: params.id, reps, weight }));
    setReps('');
    setWeight('');
  };
  const machineDelete = (id: string) => {
    if (!params?.id) return;
    dispatch(deleteMachine({ id: params.id, machineId: id }));
  };
  if (!params?.id) return <Navigate to="/types" />;
  return (
    <div className="container bg-gray-100 rounded mb-5 py-3 px-5">
      <PageHeading>
        <div className="uppercase text-xs">
          <span className="ml-2">Total:</span>
          <span className="font-bold uppercase text-sm">
            {" "}
            {machines?.length}
          </span>
        </div>
        <button onClick={() => setAddRep(true)} className="btn-primary">
          Add
        </button>
      </PageHeading>
      {machines?.length === 0 && (
        <NoMachines><p className="text-sm">Add new</p></NoMachines>
      )}
      {addRep && <div>
        Add Rep
        <div
      className="my-2 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300"
    >
      <div className="my-3 px-3">
          <div>
            <Input
              id={"1"}
              type="text"
              name="reps"
              value={reps}
              placeholder="reps"
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <div>
            <Input
              id={"1"}
              type="text"
              name="weight"
              value={weight}
              placeholder="reps"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button className="btn-primary" onClick={AddNew}>Add</button>
        </div>
      </div>
      </div>}
      <div className="flex flex-wrap flex-col">
        {machines?.filter(f => f.fields.length > 0).map((machine) => (
          <MachineList
            machine={machine}
            key={machine.id}
            titleField={titleField}
            machineDelete={machineDelete}
            handleChange={handleChange}
          />
        ))}
        <button onClick={() => setAddRep(true)} className="btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default Machines;
