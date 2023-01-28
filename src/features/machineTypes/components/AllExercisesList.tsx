import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectMachines,
} from "../MachineTypesSlice";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import EditButton from "../../../components/BackButton";
import AddExerciseToFolder from "./../AddExerciseToFolder";
import { selectExercises } from "../../exercises/ExerciseSlice";


const AllExerciseList = () => {
  const params = useParams();
  const exercises = useAppSelector(selectExercises);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [addExercise, setAddExercise] = useState<boolean>(false);
  const addNew = () => {};

  return (
    <><div id="exercises" className="my-4 rounded-lg bg-white shadow">
      {exercises?.map((exercise) => <div key={exercise.id} onClick={() => navigate(`${exercise.id}`)} className="p-2 border-b-2 border-gray-100">{exercise.name}</div>
      )}
    </div><button className="btn-primary" onClick={addNew}>Add</button></>

  );
};

export default AllExerciseList;
