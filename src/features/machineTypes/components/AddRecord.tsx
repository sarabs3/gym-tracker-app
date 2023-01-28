import { useState } from "react";
import ReactModal from "react-modal";
import Input from "../../../components/FormElements/Input";

type AddRecordProps = {
  isOpen: boolean;
  add: any;
  close: any;
};
const AddRecord = ({ isOpen, add, close }: AddRecordProps) => {
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const AddNew = () => {
    // if (!params?.id) return;
    // dispatch(addMachine({ id: params.id, reps, weight }));
    setReps('');
    setWeight('');
    close();
    add(reps, weight);
  };
  return (
  <ReactModal isOpen={isOpen} onRequestClose={close}>
    <div>
        Add Record
        <div
      className="my-2 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300"
    >
      <div className="my-3 px-3">
          <div>
            <Input
              id={"1"}
              type="text"
              name="reps"
              value={reps}
              placeholder="reps"
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <div>
            <Input
              id={"1"}
              type="text"
              name="weight"
              value={weight}
              placeholder="reps"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button className="btn-primary" onClick={AddNew}>Add</button>
        </div>
      </div>
      </div>
  </ReactModal>
)};

export default AddRecord;
