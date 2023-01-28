import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectMachines,
} from "../MachineTypesSlice";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import EditButton from "../../../components/BackButton";
import AddExerciseToFolder from "./../AddExerciseToFolder";
import { selectExercises } from "../../exercises/ExerciseSlice";

const Exercises = () => {
  const params = useParams();
  const exercises = useAppSelector(selectExercises);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [addExercise, setAddExercise] = useState<boolean>(false);

  const addNewW = () => {
    setAddExercise(true);
  };
  return (
    <div className="container bg-gray-100 rounded mb-5 py-3 px-5">    
    <EditButton />
    <Outlet />
    
    </div>
  );
};

export default Exercises;
