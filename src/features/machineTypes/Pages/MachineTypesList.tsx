import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectTypes, addNew } from "../MachineTypesSlice";
import MachineTypeComponent from "../components/MachineTypeCard";
import PageHeading from "../../../components/PageHeading";
import NoMachines from "../../../components/NoMachines";
import { lang } from "../../../lang";

const MachineTypesList = () => {
  const types = useAppSelector(selectTypes);
  const dispatch = useAppDispatch();
  const AddNew = () => {
    dispatch(addNew());
  };
  return (
    <div className="bg-gray-100  mb-5 py-3 px-5">
      <PageHeading>
        <div className="uppercase text-xs">
          <span className="ml-2">Total {lang.app} Type:</span>
          <span className="font-bold uppercase text-sm"> {types.length} </span>
        </div>
        <button onClick={AddNew} className="btn-primary">
          Add New {lang.app}
        </button>
      </PageHeading>
      {types.length === 0 && (
        <NoMachines>
          <p className="text-sm">Add new {lang.app}</p>
        </NoMachines>
      )}
      <div className="flex flex-wrap rounded flex-col md:flex-row">
        {types.map((type) => (
          <MachineTypeComponent type={type} key={type.id} />
        ))}
        <button onClick={AddNew} className="btn-primary md:hidden">
          Add New {lang.app}
        </button>
      </div>
    </div>
  );
};

export default MachineTypesList;
