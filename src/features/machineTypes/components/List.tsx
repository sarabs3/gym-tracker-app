import { ChangeEvent, FC } from "react";
import { IMachine } from "../../../types/machine";

const MachineList: FC<Props> = ({
  machine,
  machineDelete,
  handleChange,
  titleField,
}) => {
  return (
    <div
      className="my-2 md:m-2 border relative rounded-lg transition ease-in-out md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow bg-white hover:shadow-none hover:bg-blue-50 border-b-8 hover:border-blue-300"
    >
      <div className="my-3 px-3 flex flex-row">
        <div className="w-2/4 ml-2 flex flex-col">
          {machine.fields[1].fieldValue && <span>{machine.fields[1].fieldValue}</span>}
        </div>
        <div className="w-1/4 ml-2 flex flex-col">
          <span>{machine.fields[0].fieldValue} {machine.fields[0].fieldName}</span>
        </div>
        <div className="w-1/4 ml-2 flex flex-col">
          <span>{machine.fields[2].fieldValue} {machine.fields[2].fieldName}</span>
        </div>
      </div>
    </div>
  );
};

// format(new Date(), 'dd MMM yyyy')
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

export default MachineList;
