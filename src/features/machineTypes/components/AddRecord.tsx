import { format } from "date-fns";
import { useState } from "react";
import ReactModal from "react-modal";
import Input from "../../../components/FormElements/Input";

type AddRecordProps = {
  isOpen: boolean;
  add: any;
  close: any;
};
const AddRecord = ({ isOpen, add, close }: AddRecordProps) => {
  const todayDate = format(new Date(), 'yyyy-mm-dd');
  const [reps, setReps] = useState<string>('0');
  const [weight, setWeight] = useState<string>('0');
  const [date, setDate] = useState<string>(todayDate);

  const AddNew = () => {
    // if (!params?.id) return;
    // dispatch(addMachine({ id: params.id, reps, weight }));
    setReps('0');
    setWeight('0');
    close();
    add(reps, weight, date);
  };
  const addWeight = (addition: number) => {
    const val = parseFloat(weight) + addition;
    setWeight(`${val}`);
  };
  const removeWeight = (addition: number) => {
    const val = parseFloat(weight) - addition;
    if (val >= 0) {
      setWeight(`${val}`);
    } else {
      setWeight('0');
    }
  };
  const addReps = (addition: number) => {
    const val = parseFloat(reps) + addition;
    setReps(`${val}`);
  };
  const removeReps = (addition: number) => {
    const val = parseFloat(reps) - addition;
    if (val >= 0) {
      setReps(`${val}`);
    } else {
      setReps('0');
    }
  };
  return (
  <ReactModal isOpen={isOpen} onRequestClose={close} style={{content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    inset: '75% 5% auto 50%',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.6)'
    },}}>
    <div>
        Add Record
        <div
      className="my-2 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white border-b-8"
    >
      <div className="my-3 px-3 flex flex-col">
      <div className="mb-4">
            <Input
              id={"1"}
              type="date"
              name="Date"
              value={date}
              placeholder="reps"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              id={"1"}
              type="text"
              name="Reps"
              value={reps}
              placeholder="reps"
              onChange={(e) => setReps(e.target.value)}
            />
            <div className="relative flex justify-between">
              <div>
                <button>-</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => removeReps(3)}>3</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => removeReps(2)}>2</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => removeReps(1)}>1</button>
              </div>
              <div>
                <button className="bg-gray-300 rounded-lg py-1 px-3" onClick={() => addReps(1)}>1</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => addReps(2)}>2</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => addReps(3)}>3</button>
                <button className=" ml-2">+</button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Input
              id={"1"}
              type="text"
              name="Weight"
              value={weight}
              placeholder="reps"
              onChange={(e) => setWeight(e.target.value)}
            />
            <div className="relative flex justify-between">
              <div>
                <button>-</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => removeWeight(5)}>5</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => removeWeight(2.5)}>2.5</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => removeWeight(1)}>1</button>
              </div>
              <div>
                <button className="bg-gray-300 rounded-lg py-1 px-3" onClick={() => addWeight(1)}>1</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => addWeight(2.5)}>2.5</button>
                <button className="bg-gray-300 rounded-lg py-1 px-3 ml-2" onClick={() => addWeight(5)}>5</button>
                <button className=" ml-2">+</button>
              </div>
            </div>
          </div>
          <button className="btn-primary" onClick={AddNew}>Add</button>
        </div>
      </div>
      </div>
  </ReactModal>
)};

export default AddRecord;
