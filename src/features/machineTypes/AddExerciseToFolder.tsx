import ReactModal from 'react-modal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IMachine, IMachines } from '../../types/machine';
import { selectExercises } from '../exercises/ExerciseSlice';
import { addMachine } from './MachineTypesSlice';

type AddExerciseToFolderProps = {
  addExercise: any;
  close: any;
  machineId: any;
  machines?: IMachines[];
};

const AddExerciseToFolder = ({ addExercise, close, machineId, machines }: AddExerciseToFolderProps) => {
  const dispatch = useAppDispatch();
  const exercises = useAppSelector(selectExercises);
  const addExerciseToFolder = (id: string, name: string) => {
    dispatch(addMachine({ id: machineId, name, exerciseId: id }));
  };
  
  if (!machines) return null;
  const alreadyAdded = (mid: string) => !!machines.find(({ id, name }) => id === mid);

  return (<ReactModal isOpen={addExercise} onRequestClose={close}>
  {exercises.map(({ id, name }) => <div className="flex" key={id}>
    <input type="checkbox" checked={alreadyAdded(id)} onChange={() => addExerciseToFolder(id, name)} />
    <p className="p-2 border-b-2 border-gray-100" key={id}>{name}</p>
  </div>)}
</ReactModal> )
};

export default AddExerciseToFolder;
