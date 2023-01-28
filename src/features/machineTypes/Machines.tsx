import React, { 
  useState } from "react";
import { useAppSelector } from "../../app/hooks";
import {
  selectMachines,
} from "./MachineTypesSlice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import EditButton from "../../components/BackButton";
import AddExerciseToFolder from "./AddExerciseToFolder";

const Machines = () => {
  const params = useParams();
  const machines = useAppSelector(selectMachines(params?.id));
  const navigate = useNavigate();
  const [addExercise, setAddExercise] = useState<boolean>(false);
  const addNewW = () => {
    setAddExercise(true);
  };
  if (!params?.id) return <Navigate to="/types" />;
  return (
    <div className="container bg-gray-100 rounded mb-5 py-3 px-5">    
     <AddExerciseToFolder machineId={params.id} addExercise={addExercise} close={() => setAddExercise(false)} machines={machines} />
    <EditButton />
    <div id="exercises" className="my-4 rounded-lg bg-white shadow">
      {machines?.map((exercise) => 
        <div key={exercise.id} onClick={() => navigate(`/exercises/${exercise.id}`)} className="p-2 border-b-2 border-gray-100">{exercise.name}</div>
      )}
      {/* <div className="p-2">Bench press</div> */}
    </div>
      <button className="btn-primary" onClick={addNewW}>Add</button>

      {/* <PageHeading>
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
      </PageHeading> */}
      {/* {machines?.length === 0 && (
        <NoMachines><p className="text-sm">Add new</p></NoMachines>
      )}
      {addRep && } */}
      {/* <div className="flex flex-wrap flex-col">
        {machines?.filter(f => f.fields.length > 0).map((machine) => (
          <MachineList
            machine={machine}
            key={machine.id}
            titleField={titleField}
            machineDelete={machineDelete}
            handleChange={handleChange}
            machineId={params.id}
          />
        ))}
        <button onClick={() => setAddRep(true)} className="btn-primary">
          Add
        </button>
      </div> */}
    </div>
  );
};

export default Machines;
