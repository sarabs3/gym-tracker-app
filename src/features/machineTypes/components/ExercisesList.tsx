import React, { ChangeEvent, FC } from "react";
import Input from "../../../components/FormElements/Input";
import AddNewField from "./AddNewField";
import { FieldTypes, IMachineType } from "../../../types/machine";
import MachineTypeFields from "../MachineTypeFields";
import Select from "../../../components/FormElements/Select";
import CardHeader from "../../../components/CardHeader/CardHeader";
import { useAppDispatch } from "../../../app/hooks";
import {
  addNewField,
  deleteMachineType,
  updateMachineType,
} from "../MachineTypesSlice";
import { useNavigate } from "react-router-dom";

const ExercisesList: FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteFieldType = () => {
    dispatch(deleteMachineType({ id: type.id }));
  };
  const handleTypeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch(
      updateMachineType({
        id: type.id,
        key: e.target.name,
        value: e.target.value,
      })
    );
  };
  return (
    <div>
    <div
      className="my-2 p-3 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300"
      onClick={() => navigate(type.id)}
    >
      {type.type}
      </div>
      </div>
  );
};

interface Props {
  type: IMachineType;
}

export default ExercisesList;
