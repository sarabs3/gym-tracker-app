import React, { FC } from "react";
import { IMachineType } from "../../../types/machine";
import { useNavigate } from "react-router-dom";

const ExercisesList: FC<Props> = ({ type }) => {
  const navigate = useNavigate();
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
