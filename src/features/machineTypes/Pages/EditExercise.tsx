import { ChangeEvent, useState } from "react";
import CardHeader from "../../../components/CardHeader/CardHeader";
import Input from "../../../components/FormElements/Input";
import Select from "../../../components/FormElements/Select";
import { IMachine } from "../../../types/machine";
import { ReactComponent as BackIcon } from '../../../icons/back.svg';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectExercises } from "../MachineTypesSlice";

const EditExercise = ({
}) => {
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const params = useParams();
  const machineDelete = () => {};
  const navigate = useNavigate();
  const exercise = useAppSelector(selectExercises(params?.machineId, params?.id));
  return (
    <div>
    <button className="flex items-center" onClick={() => navigate(-1)}>
      <BackIcon width={20} height={20} />
      <span>Back</span>
    </button>
    
    <div
      className="m-3 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300"
    >
    <CardHeader
      title=""
      onDelete={() => machineDelete()}
    />
      <div className="my-3 px-3">
          {/* <div>
        <Select
          id="title"
          name="Exercise"
          value=""
          onChange={() => {}}
        >
          <option>Exerice</option>
        </Select>
            <Input
              id={"1"}
              type="date"
              name="date"
              value={reps}
              placeholder="reps"
              onChange={(e) => setReps(e.target.value)}
            />
            <Input
              id={"2"}
              type="text"
              name="reps"
              value={exercise?.reps || ''}
              placeholder="reps"
              onChange={(e) => setReps(e.target.value)}
            />
          </div> */}
          {/* <div>
            <Input
              id="3"
              type="text"
              name="weight"
              value={exercise?.weight || ''}
              placeholder="reps"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div> */}
        </div>
      </div>
      </div>
  );
};

interface Props {
  machine: IMachine;
  titleField: string | undefined;
  machineDelete: (id: string) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    id: string,
    fieldId: string
  ) => void;
}

export default EditExercise;
