import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { selectExercises } from "../../exercises/ExerciseSlice";


const AllExerciseList = () => {
  const exercises = useAppSelector(selectExercises);
  const navigate = useNavigate();
  const addNew = () => {};

  return (
    <><div id="exercises" className="my-4 rounded-lg bg-white shadow">
      {exercises?.map((exercise) => <div key={exercise.id} onClick={() => navigate(`${exercise.id}`)} className="p-2 border-b-2 border-gray-100">{exercise.name}</div>
      )}
    </div><button className="btn-primary" onClick={addNew}>Add</button></>

  );
};

export default AllExerciseList;
