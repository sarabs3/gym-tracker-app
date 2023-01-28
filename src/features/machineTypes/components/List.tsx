import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { IMachine } from "../../../types/machine";
import { addExerciseRecord } from "../../exercises/ExerciseSlice";
import AddRecord from "./AddRecord";

const MachineList: FC<Props> = ({
  machine,
  machineId,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [addRep, setAddRep] = useState<boolean>(false);
  const record = (reps: number, weight: number) => {
    dispatch(addExerciseRecord({ id: machine.id, reps, weight }));
  };
  return (
    <div className="flex flex-col">
      <h3>{machine.name}</h3>
      <AddRecord isOpen={addRep} close={() => setAddRep(false)} add={record} />
    <div
      className="my-2 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300"
      onClick={() => navigate(`/types/exercise/${machineId}/${machine.id}`)}
    >
      {machine.records.map(record => 
        <div key={record.id} className="my-3 px-3 flex flex-row">
          <div className="w-2/4 ml-2 flex flex-col">
            {record.date && <span>{new Date(record.date).toLocaleString("em-us", { year: "numeric", month: "short", day: "numeric" })}</span>}
          </div>
          <div className="w-1/4 ml-2 flex flex-col">
            <span>{record.reps} Reps</span>
          </div>
          <div className="w-1/4 ml-2 flex flex-col">
            <span>{record.weight}Kg</span>
          </div>
        </div>
      )}
    </div>
      <button className="btn-primary" onClick={() => setAddRep(true)}>Record</button>
    </div>
  );
};

interface Props {
  machine: IMachine;
  machineId: string | undefined;
}

export default MachineList;
