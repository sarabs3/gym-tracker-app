import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectExercise } from "../../exercises/ExerciseSlice";
import MachineList from "./List";

const ViewExercise = () => {
  const params = useParams();
  const exercise = useAppSelector(selectExercise(params.id || ''));
console.log(exercise)
  if (!exercise) return null;
  return (
    <MachineList machine={exercise} machineId={'12'} />
  )
};

export default ViewExercise;
