import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { addExercise, selectExercises } from "../../exercises/ExerciseSlice";
import ReactModal from "react-modal";
import Input from "../../../components/FormElements/Input";
import { useState } from "react";


const AllExerciseList = () => {
  const exercises = useAppSelector(selectExercises);
  const navigate = useNavigate();
  const [exerciseName, setExerciseName] = useState<string>('');
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addNew = () => {
    setIsOpen(true);
  };
  const updateExercise = () => {
    dispatch(addExercise({ name: exerciseName }));
    setExerciseName('');
    setIsOpen(false);
  };
  return (
    <>
    <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={{content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    inset: '50% 0 auto 50%',
    padding: '30px', 
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.6)'
    },}}>
      <div className="flex flex-col">
        <Input name="Exercise Name" id="exerciseName" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
        <button className="btn-primary mt-4" onClick={updateExercise}>Add Exercise</button>
      </div>
    </ReactModal>
    <div id="exercises" className="my-4 rounded-lg bg-white shadow">
      {exercises?.map((exercise) => <div key={exercise.id} onClick={() => navigate(`${exercise.id}`)} className="p-2 border-b-2 border-gray-100">{exercise.name}</div>
      )}
    </div><button className="btn-primary" onClick={addNew}>Add</button></>

  );
};

export default AllExerciseList;
